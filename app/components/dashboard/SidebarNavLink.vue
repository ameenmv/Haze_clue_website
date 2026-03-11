<template>
   <NuxtLink :to="to" class="sidebar-nav-link" :class="{
      'sidebar-nav-link--active': isActive,
      'sidebar-nav-link--collapsed': collapsed
   }" :title="collapsed ? label : undefined">
      <UIcon :name="icon" class="sidebar-nav-link__icon" />
      <Transition name="fade-label">
         <span v-show="!collapsed" class="sidebar-nav-link__label">{{ label }}</span>
      </Transition>
   </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
   to: string
   icon: string
   label: string
   collapsed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
   collapsed: false
})

const route = useRoute()
const isActive = computed(() => {
   if (props.to === '/dashboard') {
      return route.path === '/dashboard' || route.path === '/dashboard/'
   }
   return route.path.startsWith(props.to)
})
</script>

<style scoped>
.sidebar-nav-link {
   display: flex;
   align-items: center;
   padding: 12px 16px;
   border-radius: 8px;
   text-decoration: none;
   transition: all 0.2s ease;
   gap: 12px;
   width: 100%;
   overflow: hidden;
   white-space: nowrap;
}

.sidebar-nav-link--collapsed {
   justify-content: center;
   padding: 12px;
}

.sidebar-nav-link:hover:not(.sidebar-nav-link--active) {
   background: #F3F4F6;
}

:root.dark .sidebar-nav-link:hover:not(.sidebar-nav-link--active) {
   background: #252836;
}

.sidebar-nav-link--active {
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
}

.sidebar-nav-link__icon {
   width: 20px;
   height: 20px;
   flex-shrink: 0;
   color: #374151;
   transition: color 0.2s;
}

:root.dark .sidebar-nav-link__icon {
   color: #9CA3AF;
}

.sidebar-nav-link--active .sidebar-nav-link__icon {
   color: #FFFFFF;
}

.sidebar-nav-link__label {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #374151;
   overflow: hidden;
   text-overflow: ellipsis;
}

:root.dark .sidebar-nav-link__label {
   color: #D1D5DB;
}

.sidebar-nav-link--active .sidebar-nav-link__label {
   color: #FFFFFF;
}

.fade-label-enter-active,
.fade-label-leave-active {
   transition: opacity 0.15s ease;
}

.fade-label-enter-from,
.fade-label-leave-to {
   opacity: 0;
}
</style>
