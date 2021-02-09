let value = true

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve('Hey')
    } else {
      reject('Wops')
    }
  })
}

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve('Hey')
      }, 2000)
    } else {
      const error = new Error('Whops')
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Array of results', response)
  })
  .catch((err) => {
    console.log(err)
  })
