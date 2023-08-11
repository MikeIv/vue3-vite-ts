import { useFetch } from '@vueuse/core'

export const useApi = async (url) => {
  const res = await fetch(url) // useFetch
  const json = await res.json()
  console.log('DATA@: ', json)
  return json
}