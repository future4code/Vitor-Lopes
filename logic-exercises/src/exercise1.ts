//Exercise 1
//A
function exercise1A(arr: any) {
  let arraySum = 0
  let lenght = arr.length
  let arrayMultiplication = 1
  let object = {}

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i]
    arrayMultiplication *= arr[i]
  }
  object = { arraySum, lenght, arrayMultiplication }
  console.log(`
  Exercise 1A
  sum = ${arraySum}
  array length = ${lenght}
  multiplication = ${arrayMultiplication}
  `)
}

//B
function exercise1B(arr: any) {
  var min = Math.min(...arr)
  var max = Math.max(...arr)
  
  console.log(`
  Exercise 1B
  min value = ${min}
  max value = ${max}
  `)
}

exercise1A([2, 33, 10, 3])
exercise1B([1, 4, 10, 3])

