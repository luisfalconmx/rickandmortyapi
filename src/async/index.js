/* eslint-disable no-constant-condition */
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('funciona'), 3000)
      : reject(new Error('Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

console.log('before')
doSomething()
console.log('after')

const anotherFunction = async () => {
  try {
    const doSomething = await doSomethingAsync()
    console.log(doSomething)
  } catch (error) {
    console.error(error)
  }
}

console.log('before 2')
anotherFunction()
console.log('after 2')
