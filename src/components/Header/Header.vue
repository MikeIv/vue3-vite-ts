<template>
  <header class='header'>
    <section class="base-wrapper header__section">
      <nav class='header__nav'>
        <RouterLink class='header__nav-item' to='/'>Home</RouterLink>
        <RouterLink class='header__nav-item' to='/sandbox'>Sandbox</RouterLink>
      </nav>
    </section>

  </header>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
@import "./header.scss";
</style>