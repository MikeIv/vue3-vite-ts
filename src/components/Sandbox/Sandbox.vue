<template>
  <div class='sandbox base-wrapper'>
    <h1 class='sandbox__h1 a-font__h1'>Sandbox</h1>
    <section class='sandbox__section'>
      <p>{{ dataTest }}</p>
      <p>{{ test }}</p>
      <p>{{ searchInputValue }} --- state {{ filterState }}</p>
      <div v-if='apiData'>
        <p>{{ apiData }} --- {{ apiData.title }}</p>
      </div>

      <input
        class='sandbox__search'
        placeholder='Поиск в таблице'
        title='Нажмите Enter для поиска'
        v-model='searchInputValue'
      >
      <button class='sandbox__search-btn' @click='search'>Поиск</button>
      <button class='sandbox__search-btn' @click='clear'>Отчистить</button>
    </section>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
import { useTestFunc } from 'composables/useTestFunc.ts'
import { getRouterPath } from '@/composables/routerParam.ts'
import { useFilterState } from '@/composables/filter/useFilterState'
import { useApi } from '@/server/api/useApi'

const { numArr } = useTestFunc()
const dataTest = numArr.value
console.log('dataTest: ', dataTest)

const { url } = getRouterPath()
const test = url
console.log('test: ', test)

// Установка фильтра
const searchInputValue = ref<string>()

const { filterState } = useFilterState({ search: searchInputValue.value })
console.log('filterState: ', filterState)
console.log('searchInputValue: ', searchInputValue)

const search = () => {
  useFilterState({ search: searchInputValue.value })
  console.log('filterStateVALUE@@: ', filterState.value)
}

const clear = () => {
  searchInputValue.value = ''
  useFilterState({ search: searchInputValue.value })
}

// Получение api
const apiData = ref(null)

const urlApi = 'https://jsonplaceholder.typicode.com/todos/1'

useApi(urlApi).then((value: any) => {
  apiData.value = value
})
  .catch(error => {
    error.message
  })


</script>

<style lang='scss' scoped>
@import "./sandbox.scss";
</style>