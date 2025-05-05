
/*

==    loose equality operator
===   strict equality operator
   loose
!==   strict
<
>
<=
>=
*/

// loose equality operator == != 
console.log("1" == 1)  //true
console.log(true == 1) //true
console.log(true == "1") //true
console.log(null == undefined) //true
console.log("" == [])  //true
console.log("1,2" == [1,2])  //true

//strict equality operator
console.log("1" === 1)  //false
console.log(true === 1) //false
console.log(true === "1") //false
console.log(null === undefined) //false
console.log("" === [])  //false
console.log("1,2" === [1,2])  //false