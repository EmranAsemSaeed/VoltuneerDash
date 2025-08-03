<template>
  <div class="max-w-7xl mx-auto">
    <AppHeader :title="'Dashboard'" />
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Welcome to Volunteer Platform</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Our mission is to connect passionate volunteers with meaningful community projects.
            We believe everyone has something valuable to contribute, and we're here to make
            that connection smooth and rewarding.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Whether you're an individual looking to give back to your community or an organization
            seeking dedicated volunteers, Volunteer Platform is the right place for you. Join our
            growing community today and make a difference!
          </p>

          <div class="bg-blue-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div class="flex items-center">
              <div class="bg-primary rounded-full p-3 ml-4">
                <i class="fas fa-chart-line text-white text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white">Our Impact</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Over 10,000 volunteers matched with 500+ organizations since 2020
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary to-blue-400 rounded-xl p-4 text-gray-700">
            <h3 class="text-xl font-bold mb-4">Get Started</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fas fa-user-plus ml-3"></i>
                <span>Register as a volunteer</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-calendar-check ml-3"></i>
                <span>Browse upcoming events</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-hands-helping ml-3"></i>
                <span>Find the perfect match</span>
              </li>
            </ul>
            <router-link to="/volunteers" class="mt-4 bg-blue-500 text-primary px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
              Join Now
            </router-link>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <StatCard title="Volunteers" :value="volunteers.length" color="green" icon="fas fa-users" />
            <StatCard title="Events" :value="events.length" color="blue" icon="fas fa-calendar" />
            <StatCard title="Matches" :value="matches.length" color="purple" icon="fas fa-handshake" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import StatCard from '@/components/StatCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppHeader,
    StatCard
  },
  computed: {
    ...mapState('volunteers', ['volunteers']),
    ...mapState('events', ['events']),
    ...mapState('matches', ['matches'])
  }
}
</script>