const xSet = new Set([1,2,"a"])
console.log(xSet)
console.log(`----------`)

const mySet = new Set();
mySet.add(1)
mySet.add(45)
mySet.add("a")
mySet.add(true)
mySet.add("AVF")

console.log(mySet)
console.log(`----------`)

mySet.delete(45)
console.log(mySet)
console.log(`----------`)

console.log(`Does my set has a in it?  result=> ${mySet.has('a')}`)
console.log(`----------`)

console.log(`How many elements in my set?  result=> ${mySet.size}`)
console.log(`----------`)

for (const value of mySet){
   console.log(value);
   
}
console.log(`----------`)

// convert set to array

const arr = Array.from(mySet)
console.log(arr)
console.log(`----------`)

const arr2 = [...new Set([22,4,5,6,77])]
console.log(arr2)
console.log(`----------`)

const arr3 = [...mySet]
console.log(arr3)
console.log(`----------`)





mySet.clear()
console.log(mySet)
console.log(`----------`)

