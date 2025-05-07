// MAP is apply the function to every single element of the array
const number = [1,2,3,4,5]
const triple = number.map( (num) => num*3 )
console.log(number);
console.log(triple);
console.log(`----------`);


const user = [
   {name:"Jay" , age: 25},
   {name:"Bee" , age: 50},
]

const nameEdit = user.map( (user) => "MR."+user.name );
console.log(nameEdit);
console.log(`----------`);


//reduce
const number2 = [1,2,3,4,5,6]
const sum = number2.reduce( (acc,num) => acc + num,0)
console.log(sum);
console.log(`----------`);

//FILTER 
const number3 = [1,2,33,4,5,6,7,8,9]
const evenNumbers = number3.filter( (numb)=> numb%2 === 0)
console.log(evenNumbers);
console.log(`----------`);