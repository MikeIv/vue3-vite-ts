import { ref } from 'vue'
import type { FilterQuery } from '@/types/filterType.ts'

const filterState = ref<FilterQuery>({})
const defaultFilterState = ref<FilterQuery>({})

export const useFilterState = (obj: FilterQuery) => {

  filterState.value = { ...filterState.value, ...obj }
  console.log('filterStateVALUE: ', filterState.value)

  return {
    filterState,
    defaultFilterState,
  }
}

export const useFilterStateRemove = (key: string) => {

  delete filterState.value[key]
  console.log('filterStateVALUE-DEL: ', filterState.value)

  return {
    filterState,
  }
}