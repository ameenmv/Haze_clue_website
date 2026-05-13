<template>
  <UPopover :popper="{ placement: 'bottom-end' }">
    <UButton color="gray" variant="ghost" icon="lucide:bell" class="relative">
      <span v-if="unreadCount > 0" class="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
    </UButton>

    <template #panel>
      <div class="w-80 flex flex-col bg-white dark:bg-[#1a1d27] border border-gray-200 dark:border-[#2d3040] rounded-lg shadow-lg">
        <div class="flex items-center justify-between p-3 border-b border-gray-100 dark:border-[#2d3040]">
          <span class="font-semibold text-gray-900 dark:text-white">{{ $t('dashboard.notifications.title') }}</span>
          <UButton v-if="unreadCount > 0" color="primary" variant="ghost" size="xs" @click="markAllAsRead">
            {{ $t('dashboard.notifications.markAllRead') }}
          </UButton>
        </div>

        <div class="flex-1 max-h-80 overflow-y-auto">
          <div v-if="pending" class="flex justify-center p-4">
             <UIcon name="lucide:loader-2" class="animate-spin w-5 h-5 text-gray-400" />
          </div>
          <div v-else-if="!notifications.length" class="p-8 text-center text-sm text-gray-500 flex flex-col items-center gap-2">
            <UIcon name="i-lucide-bell-off" class="w-8 h-8 text-gray-400" />
            <p>{{ $t('dashboard.notifications.noNew') }}</p>
          </div>
          <div v-else class="flex flex-col">
            <div 
              v-for="notif in notifications" 
              :key="notif._id" 
              class="p-3 border-b border-gray-50 dark:border-[#2d3040]/50 hover:bg-gray-50 dark:hover:bg-[#252836] cursor-pointer flex gap-3 transition-colors"
              :class="{ 'bg-blue-50/50 dark:bg-blue-900/10': !notif.read }"
              @click="markAsRead(notif._id)"
            >
              <div class="mt-1">
                <UIcon v-if="notif.type === 'error'" name="lucide:alert-circle" class="w-5 h-5 text-red-500" />
                <UIcon v-else-if="notif.type === 'warning'" name="lucide:alert-triangle" class="w-5 h-5 text-orange-500" />
                <UIcon v-else-if="notif.type === 'success'" name="lucide:check-circle" class="w-5 h-5 text-green-500" />
                <UIcon v-else name="lucide:info" class="w-5 h-5 text-blue-500" />
              </div>
              <div class="flex-1 flex flex-col">
                <span class="text-sm font-medium dark:text-gray-200" :class="{ 'text-gray-900': !notif.read, 'text-gray-600': notif.read }">{{ notif.title }}</span>
                <span class="text-xs text-gray-500 mt-0.5">{{ notif.message }}</span>
                <span class="text-[10px] text-gray-400 mt-1">{{ new Date(notif.createdAt).toLocaleString() }}</span>
              </div>
              <div v-if="!notif.read" class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useSocket } from '~/composables/useSocket'
import { notificationsApi } from '~/services/notifications'

const authStore = useAuthStore()
const toast = useToast()
const { socket } = useSocket()

const notifications = ref<any[]>([])
const pending = ref(true)

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

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
  } catch (e) {
    console.error('Failed to mark all as read')
  }
}

onMounted(() => {
  fetchNotifications()
  
  if (socket.value && authStore.user) {
    // Listen for real-time notifications
    socket.value.on(`notification:${authStore.user.id}`, (newNotif) => {
      notifications.value.unshift(newNotif)
      
      // Show toast if important
      if (newNotif.type === 'error' || newNotif.type === 'warning') {
        toast.add({
          title: newNotif.title,
          description: newNotif.message,
          color: newNotif.type === 'error' ? 'red' : 'orange',
          icon: newNotif.type === 'error' ? 'i-lucide-alert-circle' : 'i-lucide-alert-triangle'
        })
      }
    })
  }
})
</script>
