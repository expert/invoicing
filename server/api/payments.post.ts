export default defineEventHandler((params) => {
  const query = getQuery(params)
  console.log('aa', query)
  return {
      id: 1,
      name: 'post',
      a: query.a,
      b: 'test11'
  }
})