<template>
  <div class='sandbox base-wrapper'>
    <h1 class="sandbox__h1 a-font__h1">Sandbox</h1>
    <section class="sandbox__section">
<p>{{ dataTest }}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useTestFunc } from "@/composables/useTestFunc.ts";

const { numArr } = useTestFunc();
const dataTest = numArr.value;
console.log('dataTest: ', dataTest)

</script>

<style lang="scss" scoped>
@import "./sandbox.scss";
</style>