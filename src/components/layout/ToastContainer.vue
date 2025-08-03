<template>
  <div class="fixed top-4 left-4 z-50 space-y-2 w-80">
    <transition-group name="fade">
      <Toast v-for="toast in toasts" :key="toast.id" :toast="toast" />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Toast from './Toast.vue'

export default {
  components: { Toast },
  computed: {
    ...mapState('toasts', ['toasts'])
  }
}
</script>