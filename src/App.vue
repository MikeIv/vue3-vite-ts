<template>
  <component :is='layout' class='body'>
    <RouterView />
  </component>
</template>

<script lang='ts' setup>
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const layout = DefaultLayout
</script>

<style lang="scss" scoped>

</style>
