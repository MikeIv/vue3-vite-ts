<template>
  <div class='sandbox base-wrapper'>
    <h1 class="sandbox__h1 a-font__h1">Sandbox</h1>
    <section class="sandbox__section">
<p>{{ dataTest }}</p>
<p>{{ test }}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useTestFunc } from "composables/useTestFunc.ts";
import { useFilterRouter } from "composables/useFilterRouter.ts";

const { numArr } = useTestFunc();
const dataTest = numArr.value;
console.log('dataTest: ', dataTest)

const { url } = useFilterRouter();
const test = url;
console.log('test: ', test)

</script>

<style lang="scss" scoped>
@import "./sandbox.scss";
</style>