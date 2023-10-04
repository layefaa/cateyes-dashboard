<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useAuthStore } from '@/store'

export default defineComponent({
  name: 'MainLayout',
  computed: {
    ...mapState(useAuthStore, {
      isAuth: (store) => store.auth
    })
  },
  mounted() {
    this.isUserAuthenticated()
  },
  methods: {
    isUserAuthenticated() {
      if (this.isAuth) {
        this.$router.push('/')
      } else {
        this.$router.push('/auth')
      }
    }
  }
})
</script>

<template>
  <div>Main</div>
</template>
