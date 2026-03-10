<template>
   <Transition name="sidebar-mobile">
      <aside v-show="isSidebarOpen || !isMobile" class="sidebar" :class="{
         'sidebar--collapsed': isSidebarCollapsed && !isMobile
      }">
         <!-- Logo -->
         <div class="sidebar__header">
            <NuxtLink to="/dashboard" class="sidebar__logo">
               <div class="sidebar__logo-icon">
                  <img src="/logo.png" alt="HazeClue" class="w-5 h-5" />
               </div>
               <Transition name="fade-text">
                  <div v-show="!isSidebarCollapsed || isMobile" class="sidebar__logo-text">
                     <span class="sidebar__brand">{{ $t('dashboard.sidebar.brand') }}</span>
                     <span class="sidebar__tagline">{{ $t('dashboard.sidebar.tagline') }}</span>
                  </div>
               </Transition>
            </NuxtLink>
         </div>

         <!-- Navigation -->
         <nav class="sidebar__nav">
            <div class="sidebar__nav-group">
               <SidebarNavLink v-for="link in mainLinks" :key="link.to" :to="link.to" :icon="link.icon"
                  :label="$t(link.labelKey)" :collapsed="isSidebarCollapsed && !isMobile" />
            </div>

            <div class="sidebar__divider" />

            <div class="sidebar__nav-group">
               <SidebarNavLink v-for="link in secondaryLinks" :key="link.to" :to="link.to" :icon="link.icon"
                  :label="$t(link.labelKey)" :collapsed="isSidebarCollapsed && !isMobile" />
            </div>
         </nav>

         <!-- User Profile -->
         <div class="sidebar__footer">
            <SidebarUserProfile :collapsed="isSidebarCollapsed && !isMobile" />
         </div>
      </aside>
   </Transition>
</template>

<script setup lang="ts">
interface NavLink {
   to: string
   icon: string
   labelKey: string
}

const { isSidebarOpen, isSidebarCollapsed } = useSidebar()

const isMobile = ref(false)

const checkMobile = () => {
   isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
   checkMobile()
   window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
   window.removeEventListener('resize', checkMobile)
})

const mainLinks: NavLink[] = [
   { to: '/dashboard', icon: 'lucide:layout-dashboard', labelKey: 'dashboard.sidebar.links.dashboard' },
   { to: '/dashboard/live-monitoring', icon: 'lucide:monitor', labelKey: 'dashboard.sidebar.links.liveMonitoring' },
   { to: '/dashboard/reports', icon: 'lucide:file-text', labelKey: 'dashboard.sidebar.links.reports' },
   { to: '/dashboard/sessions', icon: 'lucide:calendar-clock', labelKey: 'dashboard.sidebar.links.sessions' },
   { to: '/dashboard/devices', icon: 'lucide:settings-2', labelKey: 'dashboard.sidebar.links.devices' }
]

const secondaryLinks: NavLink[] = [
   { to: '/dashboard/settings', icon: 'lucide:settings', labelKey: 'dashboard.sidebar.links.settings' },
   { to: '/dashboard/help', icon: 'lucide:help-circle', labelKey: 'dashboard.sidebar.links.help' }
]
</script>

<style scoped>
.sidebar {
   position: fixed;
   inset-inline-start: 0;
   top: 0;
   bottom: 0;
   width: 256px;
   background: #FFFFFF;
   border-inline-end: 1px solid #E5E7EB;
   display: flex;
   flex-direction: column;
   z-index: 40;
   transition: width 0.3s ease;
   overflow: hidden;
}

:root.dark .sidebar {
   background: #1a1d27;
   border-color: #2d3040;
}

.sidebar--collapsed {
   width: 72px;
}

.sidebar__header {
   padding: 24px;
   border-bottom: 1px solid #E5E7EB;
   flex-shrink: 0;
}

:root.dark .sidebar__header {
   border-color: #2d3040;
}

.sidebar--collapsed .sidebar__header {
   padding: 24px 16px;
}

.sidebar__logo {
   display: flex;
   align-items: center;
   gap: 12px;
   text-decoration: none;
}

.sidebar__logo-icon {
   width: 40px;
   height: 40px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
}

.sidebar__logo-text {
   display: flex;
   flex-direction: column;
   white-space: nowrap;
   overflow: hidden;
}

.sidebar__brand {
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
}

:root.dark .sidebar__brand {
   color: #F3F4F6;
}

.sidebar__tagline {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #6B7280;
}

:root.dark .sidebar__tagline {
   color: #9CA3AF;
}

.sidebar__nav {
   flex: 1;
   padding: 24px 16px;
   display: flex;
   flex-direction: column;
   gap: 8px;
   overflow-y: auto;
   overflow-x: hidden;
}

.sidebar--collapsed .sidebar__nav {
   padding: 24px 12px;
}

.sidebar__nav-group {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.sidebar__divider {
   height: 1px;
   background: #E5E7EB;
   margin: 12px 0;
}

:root.dark .sidebar__divider {
   background: #2d3040;
}

.sidebar__footer {
   padding: 16px;
   border-top: 1px solid #E5E7EB;
   flex-shrink: 0;
}

:root.dark .sidebar__footer {
   border-color: #2d3040;
}

.sidebar--collapsed .sidebar__footer {
   padding: 12px;
}

.fade-text-enter-active,
.fade-text-leave-active {
   transition: opacity 0.2s ease;
}

.fade-text-enter-from,
.fade-text-leave-to {
   opacity: 0;
}

@media (max-width: 1024px) {
   .sidebar {
      width: 256px !important;
   }

   .sidebar-mobile-enter-active,
   .sidebar-mobile-leave-active {
      transition: transform 0.3s ease;
   }

   .sidebar-mobile-enter-from,
   .sidebar-mobile-leave-to {
      transform: translateX(-100%);
   }

   [dir="rtl"] .sidebar-mobile-enter-from,
   [dir="rtl"] .sidebar-mobile-leave-to {
      transform: translateX(100%);
   }
}
</style>
