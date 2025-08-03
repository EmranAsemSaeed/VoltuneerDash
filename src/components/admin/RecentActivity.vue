<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
    <h4 class="font-semibold mb-4 text-gray-800 dark:text-white">Recent Activity</h4>
    <div class="space-y-4">
      <div v-for="activity in activities" :key="activity.id"
        class="flex items-start transition-all hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg">
        <div :class="activity.iconBg" class="p-2 rounded-lg ml-3">
          <i :class="activity.icon" class="text-white"></i>
        </div>
        <div>
          <p class="font-medium text-gray-800 dark:text-white">{{ activity.title }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ activity.description }}</p>
          <p class="text-xs text-gray-500">{{ activity.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('activities', ['activities'])
  }
}
</script>