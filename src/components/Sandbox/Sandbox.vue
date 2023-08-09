<template>
  <div class='sandbox base-wrapper'>
    <h1 class='sandbox__h1 a-font__h1'>Sandbox</h1>
    <section class='sandbox__section'>
      <p>{{ dataTest }}</p>
      <p>{{ test }}</p>
      <p>{{ searchInputValue }} --- state {{ filterState }}</p>
      <input
        class='sandbox__search'
        placeholder='Поиск в таблице'
        title='Нажмите Enter для поиска'
        v-model='searchInputValue'
      >
      <button class='sandbox__search-btn' @click='search'>Поиск</button>
    </section>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { useTestFunc } from 'composables/useTestFunc.ts'
import { useFilterRouter } from 'composables/useFilterRouter.ts'
import { useFilterState } from '@/composables/filter/useFilterState'
import type { FilterQuery } from '@/types/filterType.ts'

const { numArr } = useTestFunc()
const dataTest = numArr.value
console.log('dataTest: ', dataTest)

const { url } = useFilterRouter()
const test = url
console.log('test: ', test)

const searchInputValue = ref<string>()

const { filterState } = useFilterState({ search: searchInputValue.value })
console.log('filterState: ', filterState)
console.log('searchInputValue: ', searchInputValue)

const search = () => {
  useFilterState({ search: searchInputValue.value })
  console.log('filterStateVALUE@@: ', filterState.value)
}

</script>

<style lang='scss' scoped>
@import "./sandbox.scss";
</style>