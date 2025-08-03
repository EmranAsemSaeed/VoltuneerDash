<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all hover:shadow-lg">
    <div class="p-5">
      <div class="flex justify-between">
        <h4 class="text-lg font-semibold text-gray-800 dark:text-white">{{ event.title }}</h4>
        <span class="px-3 py-1 bg-primary text-white rounded-full text-xs">
          {{ event.location }}
        </span>
      </div>

      <div class="flex items-center text-gray-600 dark:text-gray-400 mt-2 mb-3">
        <i class="far fa-calendar-alt ml-2"></i>
        <span>{{ formatDate(event.date) }}</span>
        <i class="far fa-clock mr-4 ml-2"></i>
        <span>{{ event.time }}</span>
      </div>

      <p class="text-gray-700 dark:text-gray-300 mb-4">{{ event.description }}</p>

      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Required Skills:</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in event.requiredSkills" :key="skill"
              class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
              {{ skill }}
            </span>
          </div>
        </div>

        <button @click="matchVolunteers(event)"
          class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Find Matches
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('matches', ['matchVolunteers']),
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('en-US', options)
    }
  }
}
</script>