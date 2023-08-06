<template>
  <div class='wrapper'>
    <Header />
    <main>
      <!--The <slot> element is a slot outlet that indicates
            where the "VIEW" content should be rendered.-->
      <slot></slot>
    </main>
  </div>
</template>

<script lang='ts' setup>
import Header from '@/components/Header/Header.vue'
</script>

<style lang='scss'>
.wrapper {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  width: 100%;
  min-height: 100vh;
}
</style>
