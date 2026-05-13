<template>
   <section class="danger-zone">
      <h3 class="danger-zone__title">{{ $t('dashboard.settings.danger.title') }}</h3>

      <div class="danger-zone__box">
         <h4 class="danger-zone__box-title">{{ $t('dashboard.settings.danger.deleteAccount') }}</h4>
         <p class="danger-zone__box-desc">{{ $t('dashboard.settings.danger.deleteWarning') }}</p>
         <button class="danger-zone__btn" @click="handleDelete" :disabled="deleting">
            {{ deleting ? 'Deleting...' : $t('dashboard.settings.danger.deleteBtn') }}
         </button>
      </div>
   </section>
</template>

<script setup lang="ts">
import { usersApi } from '~/services/users'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const deleting = ref(false)

const handleDelete = async () => {
   const isDark = document.documentElement.classList.contains('dark')
   const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete your account? This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC2626',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, delete it!',
      background: isDark ? '#1a1d27' : '#fff',
      color: isDark ? '#fff' : '#000',
   })
   
   if (!result.isConfirmed) return

   deleting.value = true
   try {
      await usersApi.deleteAccount()
      Swal.fire({
         title: 'Deleted!',
         text: 'Your account has been deleted.',
         icon: 'success',
         confirmButtonColor: '#6C4EFD',
         background: isDark ? '#1a1d27' : '#fff',
         color: isDark ? '#fff' : '#000',
      })
      authStore.clearSession()
   } catch {
      // Error handled by customFetch
      Swal.fire({
         title: 'Error!',
         text: 'Failed to delete account.',
         icon: 'error',
         confirmButtonColor: '#6C4EFD',
         background: isDark ? '#1a1d27' : '#fff',
         color: isDark ? '#fff' : '#000',
      })
   } finally {
      deleting.value = false
   }
}
</script>

<style scoped>
.danger-zone {
   background: #FFFFFF;
   border: 1px solid #FECACA;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .danger-zone {
   background: #1a1d27;
   border-color: #7f1d1d;
}

.danger-zone__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;
   color: #DC2626;
   margin: 0;
}

.danger-zone__box {
   background: #FEF2F2;
   border: 1px solid #FECACA;
   border-radius: 8px;
   padding: 16px;
   display: flex;
   flex-direction: column;
   gap: 8px;
}

:root.dark .danger-zone__box {
   background: #450a0a;
   border-color: #7f1d1d;
}

.danger-zone__box-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #991B1B;
   margin: 0;
}

:root.dark .danger-zone__box-title {
   color: #FCA5A5;
}

.danger-zone__box-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #DC2626;
   margin: 0;
   padding-bottom: 8px;
}

:root.dark .danger-zone__box-desc {
   color: #FCA5A5;
}

.danger-zone__btn {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 8px 16px;
   background: #DC2626;
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #FFFFFF;
   cursor: pointer;
   width: fit-content;
   transition: opacity 0.2s, transform 0.15s;
}

.danger-zone__btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.danger-zone__btn:disabled {
   opacity: 0.5;
   cursor: not-allowed;
}
</style>
