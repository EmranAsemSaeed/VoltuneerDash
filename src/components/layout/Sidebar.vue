<template>
  <aside class="w-64 bg-blue-300 dark:bg-red-800 shadow-md fixed h-full flex flex-col z-10 sidebar">
    <div class="p-5 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center space-x-3">
        <div class="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white">
          <i class="fas fa-hands-helping"></i>
        </div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white">Volunteer Platform</h1>
      </div>
    </div>

    <nav class="flex-1 p-4 ">
      <ul>
        <li v-for="(nav, index) in navigation" :key="index">
          <router-link :to="{ name: nav.id }"
            :class="{'bg-blue-50 text-primary dark:bg-gray-700': $route.name === nav.id}"
            class="flex items-center p-3 rounded-lg mb-2 text-gray-700 dark:text-gray-400 hover:bg-blue-50 hover:text-primary dark:hover:bg-gray-700 cursor-pointer transition-colors">
            <i :class="nav.icon" class="ml-3 w-5 text-center"></i>
            <span>{{ nav.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
            {{ user.name.charAt(0) }}
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 dark:text-white">{{ user.name="Emran Asem" }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ user.role }}</p>
          </div>
        </div>
        <button @click="toggleDarkMode"
          class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      navigation: [
        { id: 'Home', title: 'Home', icon: 'fas fa-home' },
        { id: 'Volunteers', title: 'Volunteers', icon: 'fas fa-users' },
        { id: 'Events', title: 'Events', icon: 'fas fa-calendar' },
        { id: 'Matches', title: 'Matching Results', icon: 'fas fa-handshake' },
        { id: 'Admin', title: 'Admin', icon: 'fas fa-cog' }
      ]
    }
  },
  computed: {
    ...mapState('theme', ['darkMode']),
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapMutations('theme', ['TOGGLE_DARK_MODE']),
    toggleDarkMode() {
      this.TOGGLE_DARK_MODE()
    }
  }
}
</script>