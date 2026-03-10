<template>
   <div class="sidebar-user" :class="{ 'sidebar-user--collapsed': collapsed }">
      <div class="sidebar-user__info">
         <div class="sidebar-user__avatar" :title="collapsed ? user?.fullName : undefined">
            <img v-if="user?.avatar" :src="user.avatar" :alt="user.fullName" class="sidebar-user__avatar-img" />
            <span v-else class="sidebar-user__avatar-fallback">{{ initials }}</span>
         </div>
         <span v-show="!collapsed" class="sidebar-user__name">{{ user?.fullName || 'User' }}</span>
      </div>

      <button v-show="!collapsed" class="sidebar-user__menu-btn" @click="showMenu = !showMenu">
         <UIcon name="lucide:more-vertical" class="w-4 h-4" />
      </button>

      <Transition name="fade">
         <div v-if="showMenu" class="sidebar-user__dropdown">
            <button class="sidebar-user__dropdown-item" @click="handleProfile">
               <UIcon name="lucide:user" class="w-4 h-4" />
               <span>{{ $t('dashboard.sidebar.user.profile') }}</span>
            </button>
            <button class="sidebar-user__dropdown-item sidebar-user__dropdown-item--danger" @click="handleLogout">
               <UIcon name="lucide:log-out" class="w-4 h-4" />
               <span>{{ $t('dashboard.sidebar.user.logout') }}</span>
            </button>
         </div>
      </Transition>
   </div>
</template>

<script setup lang="ts">
interface Props { collapsed?: boolean }
withDefaults(defineProps<Props>(), { collapsed: false })

const authStore = useAuthStore()
const { logout } = useAuth()
const user = computed(() => authStore.user)
const showMenu = ref(false)

const initials = computed(() => {
   const name = user.value?.fullName || 'U'
   return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const handleProfile = () => { showMenu.value = false; navigateTo('/dashboard/profile') }
const handleLogout = async () => { showMenu.value = false; await logout() }

onMounted(() => {
   document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.sidebar-user')) showMenu.value = false
   })
})
</script>

<style scoped>
.sidebar-user {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 12px 16px;
   background: #F9FAFB;
   border-radius: 8px;
   position: relative;
   transition: all 0.2s ease;
}

:root.dark .sidebar-user {
   background: #252836;
}

.sidebar-user--collapsed {
   justify-content: center;
   padding: 8px;
}

.sidebar-user__info {
   display: flex;
   align-items: center;
   gap: 12px;
   min-width: 0;
}

.sidebar-user__avatar {
   width: 40px;
   height: 40px;
   border-radius: 9999px;
   overflow: hidden;
   flex-shrink: 0;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}

.sidebar-user--collapsed .sidebar-user__avatar {
   width: 36px;
   height: 36px;
}

.sidebar-user__avatar-img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.sidebar-user__avatar-fallback {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 14px;
   color: #FFFFFF;
}

.sidebar-user__name {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #0F172A;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

:root.dark .sidebar-user__name {
   color: #F3F4F6;
}

.sidebar-user__menu-btn {
   padding: 4px;
   border-radius: 4px;
   background: none;
   border: none;
   cursor: pointer;
   transition: background 0.2s;
   flex-shrink: 0;
   color: #9CA3AF;
}

.sidebar-user__menu-btn:hover {
   background: #E5E7EB;
}

:root.dark .sidebar-user__menu-btn:hover {
   background: #374151;
}

.sidebar-user__dropdown {
   position: absolute;
   bottom: calc(100% + 8px);
   inset-inline-start: 0;
   inset-inline-end: 0;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 8px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   z-index: 50;
}

:root.dark .sidebar-user__dropdown {
   background: #1a1d27;
   border-color: #2d3040;
   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.sidebar-user--collapsed .sidebar-user__dropdown {
   inset-inline-start: calc(100% + 8px);
   bottom: 0;
   inset-inline-end: auto;
   min-width: 160px;
}

.sidebar-user__dropdown-item {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 10px 16px;
   width: 100%;
   background: none;
   border: none;
   cursor: pointer;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   color: #374151;
   transition: background 0.15s;
}

:root.dark .sidebar-user__dropdown-item {
   color: #D1D5DB;
}

.sidebar-user__dropdown-item:hover {
   background: #F3F4F6;
}

:root.dark .sidebar-user__dropdown-item:hover {
   background: #252836;
}

.sidebar-user__dropdown-item--danger {
   color: #EF4444;
}

.sidebar-user__dropdown-item--danger:hover {
   background: #FEF2F2;
}

:root.dark .sidebar-user__dropdown-item--danger:hover {
   background: #3b1c1c;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
   transform: translateY(4px);
}
</style>
