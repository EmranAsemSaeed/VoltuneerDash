<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-700 dark:text-gray-300">
      <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
        <tr>
          <th class="px-4 py-3">Event</th>
          <th class="px-4 py-3">Volunteer</th>
          <th class="px-4 py-3">Match Score</th>
          <th class="px-4 py-3">Location</th>
          <th class="px-4 py-3">Matched Skills</th>
          <th class="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id"
          class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
            <div>{{ match.event.title }}</div>
            <div class="text-xs text-gray-500">{{ formatDate(match.event.date) }}</div>
          </td>
          <td class="px-4 py-3">
            <div class="font-medium">{{ match.volunteer.name }}</div>
            <div class="text-xs text-gray-500">{{ match.volunteer.email }}</div>
          </td>
          <td class="px-4 py-3">
            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div class="bg-green-600 h-2.5 rounded-full"
                :style="{ width: match.matchScore + '%' }"></div>
            </div>
            <span class="text-xs">{{ match.matchScore }}%</span>
          </td>
          <td class="px-4 py-3">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              {{ match.event.location }}
            </span>
          </td>
          <td class="px-4 py-3">
            <div class="flex flex-wrap gap-1">
              <span v-for="skill in match.matchedSkills" :key="skill"
                class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                {{ skill }}
              </span>
            </div>
          </td>
          <td class="px-4 py-3">
            <span :class="statusClasses(match.status)">
              {{ match.status === 'Confirmed' ? 'Confirmed' : 'Pending' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="matches.length === 0" class="text-center py-8 text-gray-500">
    <i class="fas fa-handshake-slash text-3xl mb-2"></i>
    <p>No matches found. Create some matches from the Events page.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('matches', ['matches'])
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('en-US', options)
    },
    statusClasses(status) {
      return {
        'px-2 py-1 rounded-full text-xs': true,
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': status === 'Confirmed',
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': status === 'Pending'
      }
    }
  }
}
</script>