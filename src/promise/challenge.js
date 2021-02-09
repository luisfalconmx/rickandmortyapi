const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then((data) => {
    console.log(data.results[6].id)
    return fetchData(`${API}${data.results[6].id}`)
  })
  .then((data) => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then((data) => {
    console.log(data.dimension)
  })
  .catch((err) => console.error(err))
