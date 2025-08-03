<template>
  <div class="max-w-7xl mx-auto">
    <AppHeader :title="'Matching Results'" />
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all">
      <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Volunteer Matches with Events</h3>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <StatCard title="Total Matches" :value="matches.length" color="primary" icon="fas fa-handshake" />
        <StatCard title="Success Rate" value="92%" color="green" icon="fas fa-chart-line" />
        <StatCard title="Upcoming Events" :value="upcomingEvents" color="purple" icon="fas fa-calendar" />
      </div>

      <MatchTable />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import StatCard from '@/components/StatCard.vue'
import MatchTable from '@/components/matches/MatchTable.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    AppHeader,
    StatCard,
    MatchTable
  },
  computed: {
    ...mapState('matches', ['matches']),
    ...mapGetters('matches', ['upcomingEvents'])
  }
}
</script>