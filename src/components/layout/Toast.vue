<template>
  <div :class="`toast border-l-4 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ${typeClasses}`">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <i v-if="toast.type === 'success'" class="fas fa-check-circle text-green-500"></i>
        <i v-if="toast.type === 'error'" class="fas fa-exclamation-circle text-red-500"></i>
        <i v-if="toast.type === 'loading'" class="fas fa-spinner fa-spin text-blue-500"></i>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium">{{ toast.message }}</p>
      </div>
      <button @click="removeToast(toast.id)" class="ml-auto text-gray-400 hover:text-gray-500">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    toast: {
      type: Object,
      required: true
    }
  },
  computed: {
    typeClasses() {
      return {
        'success': 'border-green-500',
        'error': 'border-red-500',
        'loading': 'border-blue-500'
      }[this.toast.type] || 'border-blue-500'
    }
  },
  methods: {
    ...mapMutations('toasts', ['REMOVE_TOAST']),
    removeToast(id) {
      this.REMOVE_TOAST(id)
    }
  }
}
</script>