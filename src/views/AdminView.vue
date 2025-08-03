<template>
  <div class="max-w-7xl mx-auto">
    <AppHeader :title="'Admin Dashboard'" :showAddButton="user.role === 'admin'" @add="showModal = true" />
    
    <div v-if="user.role !== 'admin'" class="text-center py-12">
      <i class="fas fa-lock text-4xl text-yellow-500 mb-4"></i>
      <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Admin Access Required</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6">You need admin privileges to access this page.</p>
      <button @click="loginAsAdmin"
        class="bg-blue-400 hover:bg-blue-600 text-black px-6 py-2 rounded-lg font-medium transition-colors">
        Login as Admin
      </button>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdminAnalytics />
        <RecentActivity />
      </div>
      
      <AdminEventManagement class="mt-6" @edit-event="showModal = true" />
    </div>
    
    <Modal v-if="showModal" :modalType="modalType" @close="showModal = false" />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AdminAnalytics from '@/components/admin/AdminAnalytics.vue'
import RecentActivity from '@/components/admin/RecentActivity.vue'
import AdminEventManagement from '@/components/admin/AdminEventManagement.vue'
import Modal from '@/components/layout/Modal.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    AppHeader,
    AdminAnalytics,
    RecentActivity,
    AdminEventManagement,
    Modal
  },
  data() {
    return {
      showModal: false,
      modalType: 'event'
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapMutations('user', ['SET_USER_ROLE']),
    loginAsAdmin() {
      this.SET_USER_ROLE('admin')
      this.$store.dispatch('toasts/showToast', {
        message: 'Admin privileges granted',
        type: 'success'
      }, { root: true })
    }
  }
}
</script>