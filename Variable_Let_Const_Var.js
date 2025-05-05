// using the camelCase to define  a variable
// Var = Function scope
// Let = Block scope 
// const = Block scope Constance You can not change the value 


// Block scope 
if (true) {
   let x = 3
}
try {
   console.log(x)  //  Result Error => x is not defined cause x can only access in the block 
} catch (error) {
   console.log(error)
}

// Function Scope
if (true) {
   var y = 10
}

try {
   console.log(y) //  Result Pass => var is a function scope
} catch (error) {
   console.log(error)
}


function testVar() {
   // var "can" access before initialization
   console.log(z) // print undefined 
   var z = "testVar"
   console.log(z) // print "test"
}
testVar()

function testLet() {
   // let "can not"  before initialization
   try{ 
      console.log(a) // error 
   }catch(error){
      console.log(error)
   }
  
   let a = "testLet"
   console.log(a) // print "test"
}
testLet()