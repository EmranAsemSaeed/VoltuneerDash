<template>
  <div class="max-w-7xl mx-auto">
    <AppHeader :title="'Volunteers'" :showAddButton="user.role === 'admin'" @add="showModal = true" />
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <VolunteerForm />
        <VolunteerList />
      </div>
    </div>
    
    <Modal v-if="showModal" :modalType="'volunteer'" @close="showModal = false" />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import VolunteerForm from '@/components/volunteers/VolunteerForm.vue'
import VolunteerList from '@/components/volunteers/VolunteerList.vue'
import Modal from '@/components/layout/Modal.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppHeader,
    VolunteerForm,
    VolunteerList,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>