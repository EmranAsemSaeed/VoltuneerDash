<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
    <h4 class="font-semibold mb-4 text-gray-800 dark:text-white">Platform Analytics</h4>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <StatCard title="Volunteers" :value="volunteers.length" color="primary" icon="fas fa-users" />
      <StatCard title="Events" :value="events.length" color="green" icon="fas fa-calendar" />
      <StatCard title="Matches" :value="matches.length" color="purple" icon="fas fa-handshake" />
      <StatCard title="Success Rate" value="85%" color="yellow" icon="fas fa-chart-line" />
    </div>


  </div>
</template>

<script>
import StatCard from '@/components/StatCard.vue'
import { mapState } from 'vuex'

export default {
  components: { StatCard },
  computed: {
    ...mapState('volunteers', ['volunteers']),
    ...mapState('events', ['events']),
    ...mapState('matches', ['matches'])
  }
}
</script>