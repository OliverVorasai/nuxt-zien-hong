<template>
  <menu-listing :categories="filteredCategories" />
</template>

<script>
import MenuListing from '@/components/MenuListing'

export default {
  components: {
    MenuListing,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(
        (category) => category.name.toLowerCase() === 'luncheon'
      )
    },
  },
  head() {
    return {
      title: 'Lunch Special',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lunch special menu for Zien Hong restaurant.',
        },
      ],
    }
  },
}
</script>
