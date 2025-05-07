const object = {
   name : "Panupong",
   age   : "32",
   sayHello: function(){
      return "hello"
   }
}
console.log(object.name);
console.log(object.sayHello);
console.log(object.sayHello());
console.log(`----------`);
// object can be edited 
object.name = "Jan"
object["age"] = 30
console.log(object.name);
console.log(object.age);
console.log(`----------`);


//add new property in to the existing object
console.log(object);
object.newProp = [1,2]  // property name : newProp  value: [1,2]
object["newProp2"] = function(){
   return "Hiiii"
}
console.log(object);
console.log(object.newProp2());
console.log(`----------`);

// Object inside the object
const objA = {
   school : "Holmes",
   address : "asRR",
   subject:{
      subName : "NodeJs",
      subCredit : function(){
         return 30.2
      }
   },
   subject2:{

   }
}
console.log(objA);
console.log(objA['subject'].subCredit());
console.log(objA['subject']['subCredit']());
console.log(`----------`);

// delete the object
console.log(objA);
delete objA.subject2
console.log(objA);
console.log(`----------`);


// get keys value of object in array pattern
console.log(Object.values(objA));
console.log(Object.keys(objA));
console.log(`----------`);

// for over the object 
for (let key in objA) {
   console.log(key);
   
}


