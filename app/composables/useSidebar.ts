/**
 * useSidebar — global sidebar state management.
 *
 * Controls sidebar open/close and collapsed state.
 * - Mobile: sidebar slides in as a drawer with overlay
 * - Desktop: sidebar collapses to icon-only mode
 */

const isSidebarOpen = ref(true)       // Mobile: drawer open/close
const isSidebarCollapsed = ref(false) // Desktop: collapsed/expanded

export function useSidebar() {
  const toggleSidebar = () => {
    if (window.innerWidth <= 1024) {
      isSidebarOpen.value = !isSidebarOpen.value
    } else {
      isSidebarCollapsed.value = !isSidebarCollapsed.value
    }
  }

  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  // Close mobile sidebar on route change
  const route = useRoute()
  watch(() => route.path, () => {
    if (window.innerWidth <= 1024) {
      isSidebarOpen.value = false
    }
  })

  // Handle window resize
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      isSidebarOpen.value = true
    } else {
      isSidebarOpen.value = false
    }
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const sidebarWidth = computed(() => {
    if (window.innerWidth <= 1024) return '256px'
    return isSidebarCollapsed.value ? '72px' : '256px'
  })

  return {
    isSidebarOpen,
    isSidebarCollapsed,
    sidebarWidth,
    toggleSidebar,
    openSidebar,
    closeSidebar
  }
}
