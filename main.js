// forEach
//  let myObject={
//     age:21,
//     privateName:"eldad",
//     lastName:"brhano"
//   }
//  let yonatan={
//     age:21,
//     privateName:"yonatan",
//     lastName:"yizhak"
//   }
// let lior={
//     age:17,
//     privateName:"lior",
//     lastName:"dawit"
//   }
// let arrayNames = [lior,yonatan,myObject];

// arrayNames.forEach((user)=>{
//   if(user.age > 18){
//     my_p.innerHTML += "private name of users above 18:"+" "+  user.privateName+"<br>"
//   }
//   else{
//     my_p.innerHTML = "last name of users under 18:"+" "+ user.lastName+"<br>"
//   }
// })




// for of
// function some() {
//   let collection = document.getElementsByClassName("demo-text");
//   for(let iterator of collection){
//     iterator.style.color = "blue"
//     iterator.innerHTML = "hello"
//   }
  
// }





// function objectDemo() {
//   let obj = {
//     name: "Eldad",
//     lastName: "Brhano",
//     age: 21,
//     city: "afula",
//     country: "israel"
//   };
//   for (const key in obj) {
//     console.log( obj[key]);
//     document.body.innerHTML+=`<div>${key} : ${obj[key]}</div>`
//   }
// }
// objectDemo()



// function createObj() {
//   let obj ={
//     name:"",
//     lastName:"",
//     age: +""
//   }
//   let collection = document.getElementById('inputs1').value;
//   let collection1 = document.getElementById('inputs2').value;
//   let collection2 = document.getElementById('inputs3').value;
//   for (let iterator in obj) {
//     obj["name"]=collection;
//     obj["lastName"]=collection1;
//     obj["age"]=collection2;
//     my_p.innerHTML += `<div>${iterator} : ${obj[iterator]}</div>` 
//   }
// }