// Destructing is allow you to unpack the array

const arr = [1,"J",3]
const [x,y,z] = arr
console.log(x) //result: 1 
console.log(y) //result: J
console.log(z) //result: 3

const arrWithSpread = [10,"Q",5, true, false,3.4,"pan"]
const [xS,yS,...zS] = arrWithSpread
console.log(xS) //result: 10
console.log(yS) //result: Q
console.log(zS) //result: [ 5, true, false, 3.4, 'pan' ]


// copy the array
const arr2 = ["A", 2 , 4 , true]
const a = arr2 // can't copy this way cuz it,s gonna effect both of the array when get edited
a.push("hello") 
arr2.push("sss") 
console.log(arr2)//result: [ 'A', 2, 4, true, 'hello' ]
console.log(a)//result: [ 'A', 2, 4, true, 'hello' ]

// copy the array by using spread ...

const arr3 = ["A", 2 , 4 , true]
const a3 = [...arr3] // can't copy this way cuz it,s gonna effect both of the array when get edited
a3.push("hello") 
arr3.push("sss") 
console.log(a3)//result: [ 'A', 2, 4, true, 'hello' ]
console.log(arr3)//result: [ 'A', 2, 4, true, 'sss' ]
