// nothing


function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}
//

// function vera() {
//   return 'blogs are for chumps'
// }
//
// const bIsForVlogs = vera()
// 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
// //
// // 'https://dog.ceo/api/breeds/image/random'
// // 'https://dog.ceo/api/breeds/image/random/4'
//
// console.log('Starting the sleep function')
// // sleep(11)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')
//
// document.getElementById('click-button').addEventListener('click', console.log('ya done clicked me yeet beef POWERFUL'))

// how do we make requests in JS?
// let theData;


function fun1() {
  fun2()
}

function fun2() {
  fun3()
}

function fun3() {
  fetch()
}

function fun4() {
  return 'ahhhhhhhh'
}

fun1()
fun4()



console.log('BEFORE FETCH')

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(function(response) {
    const parsedJSON = response.json()
    // console.log(parsedJSON)
    return parsedJSON
  })
  .then(function(theReturnFromThePrevPromise) {
    // i have the data
    const someQuote = document.createElement('p')
    someQuote.innerText = theReturnFromThePrevPromise[0]
    const quoteContainer = document.querySelector("#quotes")
    quoteContainer.appendChild(someQuote)
    console.log('INSIDE FETCH line 45')
    // theData = theReturnFromThePrevPromise
  })


console.log('100% def for sure after the fetch')

// theData
// debugger


// console.log(' this is DEFINITELY AFTER THE FETCH')
