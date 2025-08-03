<template>
  <div class="lg:col-span-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transition-all">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Register as Volunteer</h3>
    <form @submit.prevent="registerVolunteer">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <input v-model="newVolunteer.name" type="text" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input v-model="newVolunteer.email" type="email" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
          <select v-model="newVolunteer.location" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
            <option value="" disabled>Select Location</option>
            <option v-for="location in locations" :value="location">{{ location }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Skills</label>
          <div class="flex flex-wrap gap-2">
            <span v-for="(skill, index) in skills" :key="index"
              @click="toggleSkill(skill)"
              :class="{'bg-gray-700 text-gray-100': newVolunteer.skills.includes(skill), 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300': !newVolunteer.skills.includes(skill)}"
              class="px-3 py-1 rounded-full text-sm cursor-pointer skill-badge transition-all">
              {{ skill }}
            </span>
          </div>
          <p v-if="errors.skills" class="text-red-500 text-xs mt-1">{{ errors.skills }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Availability</label>
          <div class="flex flex-wrap gap-2">
            <span v-for="day in days" :key="day"
              @click="toggleAvailability(day)"
              :class="{'bg-gray-700 text-gray-100': newVolunteer.availability.includes(day), 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300': !newVolunteer.availability.includes(day)}"
              class="px-3 py-1 rounded-full text-sm cursor-pointer skill-badge transition-all">
              {{ day }}
            </span>
          </div>
          <p v-if="errors.availability" class="text-red-500 text-xs mt-1">{{ errors.availability }}</p>
        </div>

        <button type="submit"
          class="w-full bg-blue-300 hover:bg-blue-600 hover:text-gray-50 text-gray-500 py-2 rounded-lg font-medium flex items-center justify-center transition-colors">
          <i class="fas fa-user-plus ml-2"></i>
          Register Volunteer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('volunteers', [
      'newVolunteer', 
      'errors', 
      'locations', 
      'skills', 
      'days'
    ])
  },
  methods: {
    ...mapActions('volunteers', ['registerVolunteer']),
    ...mapMutations('volunteers', [
      'TOGGLE_SKILL', 
      'TOGGLE_AVAILABILITY'
    ]),
    
    toggleSkill(skill) {
      this.TOGGLE_SKILL(skill)
    },
    
    toggleAvailability(day) {
      this.TOGGLE_AVAILABILITY(day)
    }
  }
}
</script>