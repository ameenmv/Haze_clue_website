<template>
  <UPopover :popper="{ placement: 'bottom-end', offsetDistance: 8 }">
    <UButton 
      color="gray" 
      variant="ghost" 
      class="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#252836]"
      :class="{ 'text-primary dark:text-[#8B7AFF]': isPopoverOpen, 'text-gray-600 dark:text-gray-400': !isPopoverOpen }"
      @click="isPopoverOpen = !isPopoverOpen"
    >
      <UIcon name="lucide:bell" class="w-5 h-5 transition-transform duration-300" :class="{ 'scale-110': isPopoverOpen }" />
      <span v-if="unreadCount > 0" class="absolute top-2 right-2 flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white dark:border-[#1a1d27]"></span>
      </span>
    </UButton>

    <template #panel="{ close }">
      <div class="w-80 sm:w-96 flex flex-col bg-white/90 dark:bg-[#151821]/90 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden">
        
        <!-- Header -->
        <div class="relative flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800/60 bg-gradient-to-r from-gray-50 to-white dark:from-[#1a1d27]/50 dark:to-[#151821]/50">
          <div class="flex items-center gap-2">
            <h3 class="font-semibold text-gray-900 dark:text-white text-base">Notifications</h3>
            <span v-if="unreadCount > 0" class="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {{ unreadCount }} new
            </span>
          </div>
          <UButton 
            v-if="unreadCount > 0" 
            color="primary" 
            variant="ghost" 
            size="xs" 
            class="text-xs font-medium hover:bg-primary/5 rounded-full transition-colors"
            @click="markAllAsRead"
          >
            Mark all read
          </UButton>
        </div>

        <!-- Body -->
        <div class="flex-1 max-h-[400px] overflow-y-auto custom-scrollbar">
          <div v-if="pending" class="flex flex-col items-center justify-center py-12 gap-3">
             <UIcon name="lucide:loader-2" class="animate-spin w-6 h-6 text-primary" />
             <span class="text-sm text-gray-500 dark:text-gray-400">Loading notifications...</span>
          </div>
          
          <div v-else-if="!notifications.length" class="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div class="w-16 h-16 mb-4 rounded-full bg-gray-50 dark:bg-[#1a1d27] flex items-center justify-center">
              <UIcon name="lucide:bell-off" class="w-8 h-8 text-gray-300 dark:text-gray-600" />
            </div>
            <p class="text-gray-900 dark:text-white font-medium mb-1">All caught up!</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">You have no new notifications right now.</p>
          </div>
          
          <div v-else class="flex flex-col">
            <TransitionGroup name="list" appear>
              <div 
                v-for="notif in notifications" 
                :key="notif._id" 
                class="group relative p-4 border-b border-gray-50 dark:border-gray-800/40 hover:bg-gray-50/80 dark:hover:bg-[#1a1d27]/80 cursor-pointer flex gap-4 transition-all duration-300"
                :class="{ 'bg-primary/5 dark:bg-primary/10': !notif.read }"
                @click="handleNotificationClick(notif, close)"
              >
                <!-- Icon based on type -->
                <div class="relative mt-0.5 shrink-0">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    :class="{
                      'bg-red-50 dark:bg-red-500/10 text-red-500': notif.type === 'error',
                      'bg-orange-50 dark:bg-orange-500/10 text-orange-500': notif.type === 'warning',
                      'bg-green-50 dark:bg-green-500/10 text-green-500': notif.type === 'success',
                      'bg-blue-50 dark:bg-blue-500/10 text-blue-500': notif.type === 'info' || !notif.type
                    }">
                    <UIcon v-if="notif.type === 'error'" name="lucide:alert-octagon" class="w-5 h-5" />
                    <UIcon v-else-if="notif.type === 'warning'" name="lucide:alert-triangle" class="w-5 h-5" />
                    <UIcon v-else-if="notif.type === 'success'" name="lucide:check-circle-2" class="w-5 h-5" />
                    <UIcon v-else name="lucide:info" class="w-5 h-5" />
                  </div>
                </div>
                
                <!-- Content -->
                <div class="flex-1 flex flex-col min-w-0">
                  <div class="flex justify-between items-start gap-2 mb-1">
                    <span class="text-sm font-semibold truncate transition-colors" 
                          :class="{ 'text-gray-900 dark:text-white': !notif.read, 'text-gray-600 dark:text-gray-300': notif.read }">
                      {{ notif.title }}
                    </span>
                    <span class="text-[11px] text-gray-400 dark:text-gray-500 whitespace-nowrap mt-0.5">
                      {{ formatTime(notif.createdAt) }}
                    </span>
                  </div>
                  <span class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {{ notif.message }}
                  </span>
                </div>
                
                <!-- Unread Indicator -->
                <div v-if="!notif.read" class="absolute top-1/2 -translate-y-1/2 right-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(108,78,253,0.6)]"></div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-3 border-t border-gray-100 dark:border-gray-800/60 bg-gray-50 dark:bg-[#151821]/80 text-center">
          <UButton variant="link" color="gray" size="sm" class="text-xs hover:text-primary transition-colors">
            View all notifications
          </UButton>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useSocket } from '~/composables/useSocket'
import { notificationsApi } from '~/services/notifications'
import { formatDistanceToNow } from 'date-fns'

const authStore = useAuthStore()
const toast = useToast()
const { socket } = useSocket()
const router = useRouter()

const notifications = ref<any[]>([])
const pending = ref(true)
const isPopoverOpen = ref(false)

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const formatTime = (dateStr: string) => {
  try {
    return formatDistanceToNow(new Date(dateStr), { addSuffix: true })
  } catch (e) {
    return new Date(dateStr).toLocaleDateString()
  }
}

// Fetch initial notifications
const fetchNotifications = async () => {
  try {
    const data = await notificationsApi.list()
    if (data) {
      notifications.value = data as any[]
    }
  } catch (e) {
    console.error('Failed to load notifications')
  } finally {
    pending.value = false
  }
}

// Handle clicking a notification
const handleNotificationClick = async (notif: any, closePopover: () => void) => {
  if (!notif.read) {
    await markAsRead(notif._id)
  }
  
  // If notification has a link, navigate to it
  if (notif.link) {
    closePopover()
    router.push(notif.link)
  }
}

// Mark single notification as read
const markAsRead = async (id: string) => {
  const notif = notifications.value.find(n => n._id === id)
  if (!notif || notif.read) return
  
  // Optimistic update
  notif.read = true
  
  try {
    await notificationsApi.markAsRead(id)
  } catch (e) {
    notif.read = false // revert on fail
  }
}

// Mark all as read
const markAllAsRead = async () => {
  notifications.value.forEach(n => n.read = true)
  
  try {
    await notificationsApi.markAllAsRead()
    toast.add({
      title: 'Success',
      description: 'All notifications marked as read',
      color: 'green'
    })
  } catch (e) {
    console.error('Failed to mark all as read')
    // Fallback: refetch to get actual state
    fetchNotifications()
  }
}

onMounted(() => {
  fetchNotifications()
  
  if (socket.value && authStore.user) {
    // Listen for real-time notifications
    socket.value.on(`notification:${authStore.user.id}`, (newNotif) => {
      notifications.value.unshift(newNotif)
      
      // Keep max 50 in state
      if (notifications.value.length > 50) {
        notifications.value.pop()
      }
      
      // Show toast if important or not open
      if (!isPopoverOpen.value || newNotif.type === 'error' || newNotif.type === 'warning') {
        toast.add({
          title: newNotif.title,
          description: newNotif.message,
          color: newNotif.type === 'error' ? 'red' : (newNotif.type === 'warning' ? 'orange' : 'primary'),
          icon: newNotif.type === 'error' ? 'i-lucide-alert-octagon' : (newNotif.type === 'warning' ? 'i-lucide-alert-triangle' : 'i-lucide-bell')
        })
      }
    })
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.4);
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>

