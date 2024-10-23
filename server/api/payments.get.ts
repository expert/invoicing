export default defineEventHandler((params) => {
  const query = getQuery(params)
  console.log('aa', query)
  return [
    {
       id: 1,
       name: 'hello111',
       a: query.a,
       b: 'test11'
    }
  ]
})