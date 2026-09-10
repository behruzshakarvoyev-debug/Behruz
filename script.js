// // // Javascript single threaded dasturlash tili 
// // // javascript bir vaqtda faqat bitta ishni bajaradi 
// // // javascript hech narsani kutmaydi 

// // // 1 sorov tugmasi bosildi
// // // 2 sorov yuborildi 
// // // 3 natija keldi(10s)
// // // 4 natija chiqarildi

// // // WEP API'S
// // // settemeout |  setInterval | Data | console | Promise

// // // WEP TIMERS

// // // console.log(`python`);

// // // setTimeout()=>{
// // //     console.log(`java    
// // // },0

// // // console.log(`java`);

// // let counter = 0;

// // let interval = setInterval(()=>{
// //     counter++
// //     console.log(`bajarildi`,counter);
    
// // },1000);
// // setTimeout(()=>{
// //     clearInterval(interval)
// // },1000)





// // const Data = {UserId : 100}

// // const vPromise = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         if(Data.UserId){
// //             resolve(`data: ${Data.UserId}`)
// //         }else{
// //             reject(`somming`)
// //         }
// //     },3000);

// // })



// // vPromise.then((value)=>{
// //     console.log(value);
    
// // }).catch((error)=>{
// //     console.log(error);
    
// // })



// // const promise  = new Promise((resolve , reject)=>{
// //     setTimeout(()=>{
// //         resolve(4)
// //     },300);
// // })
// // promise
// // .then((value )=>{
// //     console.log(`1 chain then , result :`, value);
// //     return value * 2
// // })
// // .then((value )=>{
// //     console.log(`1 chain then , result :`, value);
// //     return value * 2
// // })
// // .then((value )=>{
// //     console.log(`1 chain then , result :`, value);
// //     return value * 2
// // })
// // .then((value )=>{
// //     console.log(`1 chain then , result :`, value);
// //     return value * 2
// // })
// // .catch((error)=>{
// //     console.log(error);
// // })

// // let counter = 1 ;
// //  let Behruz = setInterval(()=> {
// //     console.log(`setInterval ishladi`, counter);

// //     counter ++
// // },1000);



// // setInterval(()=>{
// //        clearInterval(Behruz);

// // },50000);

// const fetchData=(calback)=>{

// console.log(`FETCH ISHLADI`);
// setTimeout(()=>{

       
// },3000)
// }

// fetchData((cb)=>{
//        console.log(cb);
       
// });

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Foydalanuvchi ma'lumoti keldi"),2000);
  });
}

// Chaqirish:
fetchUserData()
  .then((data) => {
    console.log(data);
    return "Keyingi bosqich";
  })
  .then((step) => console.log(step));

  function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Foydalanuvchi ma'lumoti keldi"), 1000);
  });
}

// Async funksiya yaratamiz:
async function showData() {
  // await — Promise hal bo'lguncha kutadi va natijani to'g'ridan-to'g'ri qaytaradi:
  const data = await fetchUserData(); 
  console.log(data); // "Foydalanuvchi ma'lumoti keldi"
  
  console.log("Keyingi bosqich");
}

showData();kkkk