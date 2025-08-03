<template>
  <div class="mb-6 flex justify-between items-center">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
      {{ title }}
    </h2>
    <div class="flex items-center space-x-3">
      <!-- <div class="relative">
        <input type="text" v-model="searchQuery"
          :placeholder="searchPlaceholder"
          class="pr-10 pl-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 transition-all">
        <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
      </div> -->
      <button v-if="showAddButton" @click="$emit('add')"
        class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
        <i class="fas fa-plus ml-2"></i>
        Add New
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    showAddButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    searchPlaceholder() {
      if (this.$route.name === 'Volunteers') return 'Search volunteers...'
      if (this.$route.name === 'Events') return 'Search events...'
      return 'Search...'
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  }
  // Search

}
</script>