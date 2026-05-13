<template>
   <div class="profile-page">
      <div class="profile-card">
         <div class="profile-header">
            <div class="profile-cover"></div>
            <div class="profile-avatar-wrapper">
               <div class="profile-avatar">
                  <img v-if="user?.avatar" :src="user.avatar" :alt="user.fullName" class="profile-avatar-img" />
                  <span v-else class="profile-avatar-fallback">{{ initials }}</span>
               </div>
            </div>
         </div>

         <div class="profile-body">
            <div class="profile-info-main">
               <h2 class="profile-name">{{ user?.fullName || 'User' }}</h2>
               <p class="profile-email">{{ user?.email }}</p>
               <span class="profile-role">Admin / Teacher</span>
            </div>

            <div class="profile-details">
               <div class="detail-item">
                  <div class="detail-icon-wrapper">
                     <UIcon name="lucide:mail" class="detail-icon" />
                  </div>
                  <div class="detail-text">
                     <span class="detail-label">Email Address</span>
                     <span class="detail-val">{{ user?.email || 'N/A' }}</span>
                  </div>
               </div>
               
               <div class="detail-item">
                  <div class="detail-icon-wrapper">
                     <UIcon name="lucide:phone" class="detail-icon" />
                  </div>
                  <div class="detail-text">
                     <span class="detail-label">Phone Number</span>
                     <span class="detail-val">{{ user?.phone || 'Not provided' }}</span>
                  </div>
               </div>

               <div class="detail-item">
                  <div class="detail-icon-wrapper">
                     <UIcon name="lucide:calendar" class="detail-icon" />
                  </div>
                  <div class="detail-text">
                     <span class="detail-label">Joined At</span>
                     <span class="detail-val">{{ formattedDate }}</span>
                  </div>
               </div>
            </div>

            <div class="profile-actions">
               <button class="btn-edit" @click="navigateTo('/dashboard/settings')">
                  <UIcon name="lucide:edit-3" class="w-4 h-4" />
                  Edit Profile
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { computed } from 'vue'

definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})

useHead({
   title: 'My Profile | Haze Clue'
})

const authStore = useAuthStore()
const user = computed(() => authStore.user)

const initials = computed(() => {
   const name = user.value?.fullName || 'U'
   return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const formattedDate = computed(() => {
   if (!user.value?.created_at) return 'Unknown'
   return new Date(user.value.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   })
})
</script>

<style scoped>
.profile-page {
   padding: 32px;
   display: flex;
   justify-content: center;
   width: 100%;
}

.profile-card {
   width: 100%;
   max-width: 768px;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 16px;
   overflow: hidden;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

:root.dark .profile-card {
   background: #1a1d27;
   border-color: #2d3040;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.profile-cover {
   height: 160px;
   background: linear-gradient(135deg, #6C4EFD 0%, #4C38AF 100%);
   position: relative;
}

.profile-avatar-wrapper {
   display: flex;
   justify-content: center;
   margin-top: -60px;
   position: relative;
   z-index: 10;
}

.profile-avatar {
   width: 120px;
   height: 120px;
   border-radius: 50%;
   border: 4px solid #FFFFFF;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:root.dark .profile-avatar {
   border-color: #1a1d27;
}

.profile-avatar-img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.profile-avatar-fallback {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 36px;
   color: #FFFFFF;
}

.profile-body {
   padding: 24px 32px 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.profile-info-main {
   text-align: center;
   margin-bottom: 32px;
}

.profile-name {
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   font-size: 28px;
   color: #111827;
   margin: 0 0 4px 0;
}

:root.dark .profile-name {
   color: #F3F4F6;
}

.profile-email {
   font-family: 'Inter', sans-serif;
   font-size: 16px;
   color: #6B7280;
   margin: 0 0 12px 0;
}

:root.dark .profile-email {
   color: #9CA3AF;
}

.profile-role {
   display: inline-block;
   padding: 4px 12px;
   background: #EEF2FF;
   color: #4F46E5;
   border-radius: 9999px;
   font-family: 'Inter', sans-serif;
   font-size: 13px;
   font-weight: 600;
}

:root.dark .profile-role {
   background: #3730a3;
   color: #e0e7ff;
}

.profile-details {
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-bottom: 32px;
   padding: 24px;
   background: #F9FAFB;
   border-radius: 12px;
}

:root.dark .profile-details {
   background: #252836;
}

.detail-item {
   display: flex;
   align-items: center;
   gap: 16px;
}

.detail-icon-wrapper {
   width: 40px;
   height: 40px;
   border-radius: 10px;
   background: #FFFFFF;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #6C4EFD;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

:root.dark .detail-icon-wrapper {
   background: #1a1d27;
   color: #818cf8;
}

.detail-icon {
   width: 20px;
   height: 20px;
}

.detail-text {
   display: flex;
   flex-direction: column;
   gap: 2px;
}

.detail-label {
   font-family: 'Inter', sans-serif;
   font-size: 13px;
   color: #6B7280;
}

:root.dark .detail-label {
   color: #9CA3AF;
}

.detail-val {
   font-family: 'Inter', sans-serif;
   font-size: 15px;
   font-weight: 500;
   color: #111827;
}

:root.dark .detail-val {
   color: #F3F4F6;
}

.profile-actions {
   width: 100%;
   display: flex;
   justify-content: center;
}

.btn-edit {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 32px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.15s;
}

.btn-edit:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.btn-edit:active {
   transform: translateY(0);
}

@media (max-width: 640px) {
   .profile-page {
      padding: 16px;
   }
   
   .profile-body {
      padding: 24px 20px;
   }
}
</style>
