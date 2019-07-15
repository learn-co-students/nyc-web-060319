//
// // var name = "BENNIE, BENNIE, BENNIE && the cheettttzzz"
//
// function sayThyName() {
//   var name = "swaggy"
//   console.log(name)
// }
// console.log(happy)
//
//
// var happy = '🤠'
// console.log(happy)
//
// for (var i = 0; i < [1,2,3,4].length; i++) {
//   console.log(i)
// }
//
// console.log(i, '<--- this is i')


// console.log(funFunction)
//
// function funFunction() {
//   return 'nothing'
// }


const object = {chuck: "e. Cheese"}

const functionObj = function() {
  return 'yeeeeeeeeeeeeeeeeeeeeeé'
}

function fun1(arg) {
  console.log(arg())
}


fun1(         functionObj           )


let coolArr = [' me', 'swaglord', 'bennie and the chettz']

function passThisIntoMap(eachThingHERE) {
  return `${eachThingHERE}  newString`
}

// coolArr.map { |peep| peep +1 }

// const newArr = coolArr.map( function(eachThingHERE) {
//   return `${eachThingHERE}  newString`
// }  )


const newArr = coolArr.map( passThisIntoMap  )

console.log(newArr)

// let food;

//make an API call gets weather
// function getWeather() {
//   return 'sunny'
// }
//
// if (getWeather() === 'sunny') {
//  let food = 'burrito'
// }
//
//
// if (food === "burrito") {
  // POWERFUL
// }
//

// console.log(name)
// sayThyName()

// for (var i = 0; i < array.length; i++) {
//   //block
//   array[i]
// }


// /**************** Lexical Scoping ************************/
// //
// // const shirt = 'shaped like a t, which is why it is called a t-shirt'
// //
// // function printShirt(  ) {
// //   const shirt = 'new shirt'
// //   const pants = 'blue jean baby'
// //   console.log(shirt)
// // }
// // console.log(shirt)
// //
// // printShirt()
//
// // shirt
//
// // // pants
// //
// // function outerHeight() {
// //   const height = 10
// //   const innerHeight = function() {
// //     const height = 'HOTDOG'
// //     const dino = 't-rex'
// //     console.log('HEIGHT IS: ', height)
// //   }
// //   return innerHeight
// // }
// //
// // outerHeight()()
//
//
// /*******************************************************/
//
// /*******************JS Scopes***************************/
// /*******************Global***************************/
// const globalName = 'winfield'
//
// /*******************Function***************************/
//
// function pizza() {
//   const toppings = 'olives, pineapple, pepperoni, anchovies, sprinkles'
// }
//
// pizza()
//
// // toppings
//
// /*******************Block***************************/
//
// {
//   const fish = 'salmon'
// }
//
// const o = { hello: 'world', hi: 'there' }
// console.log(o.hello)
//
// if (true) {
//   const sneakers = 'jordans'
//   console.log(sneakers)
// }
//
//
// /*******************************************************/
//
// /************** Var Let Const *********************/
//
// //var can be redeclared and reassigned AS MANY TIMES AS I WANT
//
// var tomato = 'a nice tomato sauce'
//
// tomato = 'sundried (are they actually dried in the sun🤔)'
//
// var tomato = function() {
//   console.log('o what??????')
// }
//
// // let can be reassigned BUT NOT REDECLARED
//
// let pears = 'green and kinda mushy'
//
// pears = 'a late summer fruit??????'
//
// // let pears = 'not a winter fruit'
//
// //const can neither be redeclared nor reassigned
//
// const apple = 'a fall fruit (also a tech company lol but do not eat ur macbook)'
//
// // apple = 'just a fruit'
//
// // const apple = 'a tech giant'
//
// // vars declared without var/let/const will become GLOBAL ¯\_(ツ)_/¯
//
// function declareDriver() {
//   driver = 'dale earnhardt jr'
// }
//  // console.log(driver)
// // declareDriver()
//
// // driver
//
// /////////////****** HOISTING *******////////////
// //
// console.log(happy)
//
// var happy = '🤠'
//
// console.log(happy)
//
// // console.log(sharks)
// let sharks = "threat to the internet"
//
// console.log(sharks)
//
//
// currentMood()
//
// function currentMood() {
//   console.log('🤔🧐🙄')
// }
//
// console.log(coolFunction)
//
// var coolFunction = function(){
//   console.log('man, soo cool')
// }
//
// currentMood()
// //
// // currentMood = 'DEF NOT A FUNCTION'
// //
// // console.log(currentMood)
// //
// // console.log(bueller)
// //
// // var bueller = function() {
// //   console.log('BUUUEEEELLLLERRRRRR')
// // }
// //
// // bueller()
// //
// //
// //
// // let belt = 'Gucci'
//
//  let name ='something'
// function hoistVar() {
//   console.log(name)
//   if (true) {
//     var name = 'jimmy'
//   }
//   console.log(name)
// }
//
//
// //
// // for (let i = 0; i < 10; i++) {
// //   console.log(i, "inside for loop")
// // }
// // console.log(i, "outside for loop")
//
// // {
// //   var insideBlock = "blocked!"
// // }
// // console.log(insideBlock)
//
// // hoistVar()
// //
// // //****** First Class Functions ******************//
// //
// const hamburger = function() {
//   return 'cheese, nice'
// }
//
// const higherOrder = function(cb) {
//   return cb()
// }
//
//
// console.log(higherOrder(hamburger))
// //
// //
// // //////////****** Higher Order Functions && Closures ******************/////
//
// function higherOrderJamesBond(movie) {
//   // const moreCONSTS = "captured?"
//   // const movie = 'the ice palace one with Halle Berry'
//   return function innerFn() {
//     return `My favorite James Bond film is ${movie}`
//   }
// }
//
//
// const badBondMovie = higherOrderJamesBond()
//
// console.log(badBondMovie())
// const favBondMovie = higherOrderJamesBond
// console.log(favBondMovie)
