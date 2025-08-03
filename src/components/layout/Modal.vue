<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md transition-all duration-300 transform scale-100">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              {{ modalType === 'event' ? 'Add New Event' : 'Add New Project' }}
            </h3>
            <button @click="$emit('close')"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <form @submit.prevent="submitForm">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                <input v-model="newItem.title" type="text" required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea v-model="newItem.description" required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                <select v-model="newItem.location" required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  <option value="" disabled>Select Location</option>
                  <option v-for="location in locations" :value="location">{{ location }}</option>
                </select>
              </div>

              <div v-if="modalType === 'event'">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                    <input v-model="newItem.date" type="date" required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
                    <input v-model="newItem.time" type="time" required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Required Skills</label>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(skill, index) in skills" :key="index"
                    @click="toggleSkill(skill)"
                    :class="{'bg-primary text-white': newItem.requiredSkills.includes(skill), 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300': !newItem.requiredSkills.includes(skill)}"
                    class="px-3 py-1 rounded-full text-sm cursor-pointer skill-badge transition-all">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <div class="flex justify-end space-x-3">
                <button @click="$emit('close')" type="button"
                  class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button type="submit"
                  class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    show: Boolean,
    modalType: String
  },
  computed: {
    ...mapState('events', ['locations', 'skills']),
    ...mapState('volunteers', ['skills']),
    newItem() {
      return this.$store.state.events.newEvent
    }
  },
  methods: {
    ...mapActions('events', ['addEvent']),
    ...mapActions('matches', ['addProject']),
    toggleSkill(skill) {
      this.$store.commit('events/TOGGLE_EVENT_SKILL', skill)
    },
    submitForm() {
      if (this.modalType === 'event') {
        this.addEvent()
      } else {
        this.addProject()
      }
      this.$emit('close')
    }
  }
}
</script>