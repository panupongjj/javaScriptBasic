const myPromise = new Promise((resolve,reject) => {
   // asynchronous operation
   if (false) {
      resolve("good")
   } else {
      reject("bad")
   }

});

myPromise.then( (value) =>{
   console.log(value);

}).catch((value) => {
   console.log(value);
   
}).finally(()=>{
   console.log('Always');
})