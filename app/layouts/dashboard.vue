<template>
   <div class="dashboard-layout" :class="{ 'dashboard-layout--collapsed': isSidebarCollapsed }">
      <!-- Mobile Overlay -->
      <Transition name="overlay">
         <div v-if="isMobile && isSidebarOpen" class="dashboard-layout__overlay" @click="closeSidebar" />
      </Transition>

      <!-- Sidebar -->
      <TheSidebar />

      <!-- Main Content -->
      <main class="dashboard-main">
         <!-- Top Bar -->
         <header class="dashboard-topbar">
            <button class="dashboard-topbar__toggle" @click="toggleSidebar"
               :aria-label="isSidebarOpen ? 'Close menu' : 'Open menu'">
               <UIcon :name="toggleIcon" class="w-5 h-5" />
            </button>

            <div class="dashboard-topbar__spacer" />

            <!-- Right side actions -->
            <div class="dashboard-topbar__actions">
               <AppLanguageSwitcher />

               <button class="dashboard-topbar__icon-btn" @click="toggleDark"
                  :title="isDark ? 'Light Mode' : 'Dark Mode'">
                  <UIcon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="w-5 h-5" />
               </button>

               <button class="dashboard-topbar__icon-btn">
                  <UIcon name="lucide:bell" class="w-5 h-5" />
               </button>
            </div>
         </header>

         <!-- Page Content -->
         <div class="dashboard-content">
            <slot />
         </div>
      </main>
   </div>
</template>

<script setup lang="ts">
const { isSidebarOpen, isSidebarCollapsed, toggleSidebar, closeSidebar } = useSidebar()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => {
   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

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

const toggleIcon = computed(() => {
   if (isMobile.value) {
      return isSidebarOpen.value ? 'lucide:x' : 'lucide:menu'
   }
   return isSidebarCollapsed.value ? 'lucide:panel-left-open' : 'lucide:panel-left-close'
})
</script>

<style scoped>
.dashboard-layout {
   display: flex;
   min-height: 100vh;
   background: #F9FAFB;
}

:root.dark .dashboard-layout {
   background: #0f1117;
}

.dashboard-main {
   flex: 1;
   margin-inline-start: 256px;
   min-height: 100vh;
   min-width: 0;
   display: flex;
   flex-direction: column;
   transition: margin-inline-start 0.3s ease;
   overflow-x: hidden;
}

.dashboard-layout--collapsed .dashboard-main {
   margin-inline-start: 72px;
}

/* ─── Top Bar ─────────────────────────────────────── */
.dashboard-topbar {
   display: flex;
   align-items: center;
   padding: 16px 32px;
   background: #FFFFFF;
   border-bottom: 1px solid #E5E7EB;
   position: sticky;
   top: 0;
   z-index: 30;
   gap: 16px;
   width: 100%;
}

:root.dark .dashboard-topbar {
   background: #1a1d27;
   border-color: #2d3040;
}

.dashboard-topbar__toggle {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 8px;
   border: 1px solid #E5E7EB;
   background: #FFFFFF;
   cursor: pointer;
   color: #374151;
   transition: all 0.2s;
   flex-shrink: 0;
}

:root.dark .dashboard-topbar__toggle {
   background: #1a1d27;
   border-color: #2d3040;
   color: #9CA3AF;
}

.dashboard-topbar__toggle:hover {
   background: #F3F4F6;
   color: #6C4EFD;
   border-color: #6C4EFD;
}

:root.dark .dashboard-topbar__toggle:hover {
   background: #252836;
   color: #8B7AFF;
   border-color: #8B7AFF;
}

.dashboard-topbar__spacer {
   flex: 1;
}

.dashboard-topbar__actions {
   display: flex;
   align-items: center;
   gap: 8px;
}

.dashboard-topbar__icon-btn {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 8px;
   border: none;
   background: none;
   cursor: pointer;
   color: #6B7280;
   transition: all 0.2s;
}

.dashboard-topbar__icon-btn:hover {
   background: #F3F4F6;
   color: #374151;
}

:root.dark .dashboard-topbar__icon-btn {
   color: #9CA3AF;
}

:root.dark .dashboard-topbar__icon-btn:hover {
   background: #252836;
   color: #E5E7EB;
}

/* ─── Content ─────────────────────────────────────── */
.dashboard-content {
   flex: 1;
   width: 100%;
}

/* ─── Overlay ─────────────────────────────────────── */
.dashboard-layout__overlay {
   position: fixed;
   inset: 0;
   background: rgba(0, 0, 0, 0.5);
   z-index: 35;
   backdrop-filter: blur(2px);
}

.overlay-enter-active,
.overlay-leave-active {
   transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
   opacity: 0;
}

/* ─── Responsive ──────────────────────────────────── */
@media (max-width: 1024px) {
   .dashboard-main {
      margin-inline-start: 0 !important;
   }

   .dashboard-topbar {
      padding: 12px 16px;
   }
}
</style>
