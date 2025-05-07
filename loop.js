do {
  console.log("run");
  break;// add the condition to chang to false to finish the loop
} while (true);

console.log(`----------`);
while (true) {
   console.log("hello");
   break;// add the condition to chang to false to finish the loop
}
console.log(`----------`);

const arr = ["A", 6 , false , "WW"]
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
console.log(`----------`);

// for to the value over the array 
for (let value of arr){
   console.log(value);
}
console.log(`----------`);

// for to the value over the string
const str = "Panup"
for (let value of str){
   console.log(value);
}
console.log(`----------`);

// get index and value 
for (let [i , value] of arr.entries()){
   console.log(`index: ${i}  value: ${value}`);
}
console.log(`----------`);