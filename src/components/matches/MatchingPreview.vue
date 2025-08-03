<template>
  <div class="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 transition-all">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Matching Results</h3>

    <div v-if="currentMatch" class="mb-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mb-4">
        <h4 class="font-medium text-gray-800 dark:text-white mb-2">{{ currentMatch.event.title }}</h4>
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
          <i class="far fa-calendar-alt ml-2"></i>
          <span>{{ formatDate(currentMatch.event.date) }}</span>
        </div>

        <div class="space-y-3">
          <div v-for="match in currentMatch.matches" :key="match.volunteer.id"
            class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white ml-3">
                {{ match.volunteer.name.charAt(0) }}
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-white">{{ match.volunteer.name }}</p>
                <p class="text-xs text-gray-600 dark:text-gray-400">{{ match.matchScore }}% Match</p>
              </div>
            </div>

            <div class="mt-2 text-xs">
              <p v-if="match.reason" class="text-green-600 dark:text-green-400">
                <i class="fas fa-check-circle ml-1"></i> {{ match.reason }}
              </p>
              <p v-if="match.warning" class="text-yellow-600 dark:text-yellow-400">
                <i class="fas fa-exclamation-triangle ml-1"></i> {{ match.warning }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button @click="saveMatches"
        class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors">
        Save Matches
      </button>
    </div>

    <div v-else class="text-center py-8 text-gray-500">
      <i class="fas fa-handshake text-3xl mb-2"></i>
      <p>Select an event to see volunteer matches</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('matches', ['currentMatch'])
  },
  methods: {
    ...mapActions('matches', ['saveMatches']),
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('en-US', options)
    }
  }
}
</script>