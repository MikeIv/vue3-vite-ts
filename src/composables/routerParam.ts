import router from '@/router'


export const getRouterPath = () => {
  const url = router.currentRoute.value.path

  return {
    url,
  }
}

export const getRouterParams = () => {
  const params = router.currentRoute.value.query

  return {
    params,
  }
}

export const getRouterParam = (str: string) => {
  const param = router.currentRoute.value.query[str]

  return {
    param,
  }
}

const setParam = (obj: { [key: string]: string | number }) => {
  const queryToSet = removeEmptyKeys({ ...router.currentRoute.value.query, ...obj })
  router.replace({ query: queryToSet })
}


const removeEmptyKeys = (obj) => {
  const result = obj
  for (const key in result) {
    if ((result[key]).length === 0) {
      delete result[key]
    }
  }
  return result
}

const removeQueryParameter = (key: string) => {
  const objQuery = { ...router.currentRoute.value.query }
  delete objQuery[key]
  router.replace({ query: objQuery })
}