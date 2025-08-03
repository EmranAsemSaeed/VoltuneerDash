<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow mt-6">
    <h4 class="font-semibold mb-4 text-gray-800 dark:text-white">Event Management</h4>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
          <tr>
            <th class="px-4 py-3">Event</th>
            <th class="px-4 py-3">Location</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Volunteers</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id"
            class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">{{ event.title }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                {{ event.location }}
              </span>
            </td>
            <td class="px-4 py-3">{{ formatDate(event.date) }}</td>
            <td class="px-4 py-3">{{ event.volunteers || 0 }} / {{ event.requiredVolunteers }}</td>
            <td class="px-4 py-3">
              <span :class="statusClasses(event.status)">
                {{ event.status === 'Active' ? 'Active' : 'Completed' }}
              </span>
            </td>
            <td class="px-4 py-3">
              <button @click="editEvent(event)"
                class="text-blue-500 hover:text-blue-700 ml-2 transition-colors">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteEvent(event.id)"
                class="text-red-500 hover:text-red-700 transition-colors">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('events', ['events'])
  },
  methods: {
    ...mapActions('events', ['deleteEvent']),
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('en-US', options)
    },
    statusClasses(status) {
      return {
        'px-2 py-1 rounded-full text-xs': true,
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': status === 'Active',
        'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200': status === 'Completed'
      }
    },
    editEvent(event) {
      this.$store.commit('events/SET_NEW_EVENT', event)
      this.$emit('edit-event')
    }
  }
}
</script>