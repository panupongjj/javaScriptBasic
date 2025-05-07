function greet(name , age =12){
   console.log(name);
   console.log(age)
   console.log(`----------`);
   
}
greet("jay")

const greetA = function(name, age= 30){
   console.log(name)
   console.log(age)
   console.log(`----------`);
}
greetA('Pan', 100)



const greetB = (name,age) => `Name : ${name} Age: ${age}`
console.log(greetB("pppp", 45));
console.log(`----------`)


function addNumber(...num){
   console.log(num);
   console.log(`----------`)
   
}

addNumber(10,23,34,545,656,22,1)
