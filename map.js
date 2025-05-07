const myMap = new Map()
const numberMap = new Map([ [1,"one"] , [2,"two"], ["a", "AAAAA"] ])

myMap.set(4,"four")
console.log(myMap)
console.log(`----------`);

console.log(numberMap)
numberMap.delete(2)
console.log(numberMap)
console.log(`----------`);

console.log(numberMap.get("a"))
console.log(`----------`);

console.log(numberMap.has("1"))
console.log(`----------`);

console.log(numberMap.size)
console.log(`----------`);


for(const [key,val] of numberMap){
   console.log(`key: ${key} ---- value: ${val}`)

}

const arr = Array.from(numberMap)
console.log(arr)
console.log(`----------`);
myMap.clear()