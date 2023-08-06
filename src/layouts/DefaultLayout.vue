<template>
  <main>
    <nav>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/about'>About</RouterLink>
    </nav>
    <!--The <slot> element is a slot outlet that indicates
          where the "VIEW" content should be rendered.-->
    <slot></slot>
  </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Default',
})
</script>
