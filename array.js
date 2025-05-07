// create array can mix the data type
const arr = [1,2,3,true,"JJ",2.4]
console.log(arr) // result = [ 1, 2, 3, true, 'JJ', 2.4 ]

// create empty array
const arr2 = new Array(5) 
console.log(arr2) // result = [ <5 empty items> ]

// create array from string
const arr3 = Array.from("Panupong")
console.log(arr3) // result = [ 'P', 'a', 'n','u', 'p', 'o','n', 'g']

// access last digit of array by lenght - 1 
var lastArr = arr3[arr3.length - 1]
console.log(lastArr)// result =// g

// Try to assign the element to the digit that not exist
arr[arr.length + 6] = "test"
console.log(arr) // result = [ 1, 2, 3, true, 'JJ', 2.4, <6 empty items>, 'test' ]

// add data to the existing array in the last digit
arr.push("JJ")
console.log(arr) // result = [ 1, 2, 3, true, 'JJ', 2.4, <6 empty items>, 'test', 'JJ' ]

// remove the last data from array and return that value
var popValue = arr.pop() 
console.log(popValue)  // result = JJ
console.log(arr) // result = [ 1, 2, 3, true, 'JJ', 2.4, <6 empty items>, 'test' ]

// remove the first data from array and return that value
var shiftValue = arr.shift()
console.log(shiftValue)  // result = JJ
console.log(arr) // result = [ 1, 2, 3, true, 'JJ', 2.4, <6 empty items>, 'test' ]

// add data to the first digit of the array
arr.unshift("new")
console.log(arr)

// access the digit number by using data ** will 
// return the index of the first founded data 
console.log(arr3.indexOf('n')) // result = 2
// return the index of the last founded data 
console.log(arr3.lastIndexOf('n')) // result = 6

// Find the data the exist in the array
console.log(arr3)
console.log(arr3.includes('P')) // result = true


