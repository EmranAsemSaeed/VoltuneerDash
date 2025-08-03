<template>
  <div class="lg:col-span-2">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">All Volunteers</h3>
      <div class="flex space-x-2">
        <select v-model="volunteersFilter"
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

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
          <tr>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Location</th>
            <th class="px-4 py-3">Skills</th>
            <th class="px-4 py-3">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="volunteer in paginatedVolunteers" :key="volunteer.id"
            class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">{{ volunteer.name }}</td>
            <td class="px-4 py-3">{{ volunteer.email }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                {{ volunteer.location }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span v-for="skill in volunteer.skills" :key="skill"
                  class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                  {{ skill }}
                </span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span v-for="day in volunteer.availability" :key="day"
                  class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                  {{ day }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="filteredVolunteers.length === 0" class="text-center py-8 text-gray-500">
      <i class="fas fa-user-slash text-3xl mb-2"></i>
      <p>No volunteers found</p>
    </div>

    <div class="flex justify-between items-center mt-4">
      <div class="text-sm text-gray-700 dark:text-gray-300">
        Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredVolunteers.length }} entries
      </div>
      <div class="flex space-x-1">
        <button @click="prevPage" :disabled="pagination.currentPage === 1"
          :class="{'opacity-50 cursor-not-allowed': pagination.currentPage === 1}"
          class="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button v-for="page in totalPages" :key="page"
          @click="setPage(page)"
          :class="{'bg-primary text-white': pagination.currentPage === page, 'bg-white dark:bg-gray-800': pagination.currentPage !== page}"
          class="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors">
          {{ page }}
        </button>
        <button @click="nextPage"
          :disabled="pagination.currentPage === totalPages"
          :class="{'opacity-50 cursor-not-allowed': pagination.currentPage === totalPages}"
          class="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('volunteers', [
      'volunteersFilter',
      'skillsFilter',
      'pagination',
      'locations',
      'skills'
    ]),
    ...mapGetters('volunteers', [
      'filteredVolunteers',
      'paginatedVolunteers',
      'totalPages'
    ]),
    
    startIndex() {
      return (this.pagination.currentPage - 1) * this.pagination.itemsPerPage
    },
    
    endIndex() {
      return Math.min(
        this.pagination.currentPage * this.pagination.itemsPerPage,
        this.filteredVolunteers.length
      )
    }
  },
  methods: {
    ...mapMutations('volunteers', [
      'SET_VOLUNTEER_FILTER',
      'SET_SKILLS_FILTER',
      'SET_PAGINATION_PAGE'
    ]),
    
    prevPage() {
      if (this.pagination.currentPage > 1) {
        this.SET_PAGINATION_PAGE(this.pagination.currentPage - 1)
      }
    },
    
    nextPage() {
      if (this.pagination.currentPage < this.totalPages) {
        this.SET_PAGINATION_PAGE(this.pagination.currentPage + 1)
      }
    },
    
    setPage(page) {
      this.SET_PAGINATION_PAGE(page)
    }
  }
}
</script>