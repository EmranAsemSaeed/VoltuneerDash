<template>
  <div class="max-w-7xl mx-auto">
    <AppHeader :title="'Events'" :showAddButton="user.role === 'admin'" @add="showModal = true" />
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Upcoming Events</h3>
            <div class="flex space-x-2">
              <select v-model="eventsFilter"
                class="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors">
                <option value="all">All Locations</option>
                <option v-for="location in locations" :value="location">{{ location }}</option>
              </select>
              <select v-model="skillsFilter"
                class="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors">
                <option value="all">All Skills</option>
                <option v-for="skill in skills" :value="skill">{{ skill }}</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
            
            <div v-if="filteredEvents.length === 0" class="text-center py-8 text-gray-500">
              <i class="fas fa-calendar-times text-3xl mb-2"></i>
              <p>No events found</p>
            </div>
          </div>
        </div>

        <MatchingPreview />
      </div>
    </div>
    
    <Modal v-if="showModal" :modalType="'event'" @close="showModal = false" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppHeader from '@/components/layout/AppHeader.vue'
import EventCard from '@/components/events/EventCard.vue'
import MatchingPreview from '@/components/matches/MatchingPreview.vue'
import Modal from '@/components/layout/Modal.vue'

export default {
  components: {
    AppHeader,
    EventCard,
    MatchingPreview,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState('events', ['eventsFilter', 'skillsFilter', 'locations', 'skills']),
    ...mapState('user', ['user']),
    ...mapGetters('events', ['filteredEvents'])
  }
}
</script>