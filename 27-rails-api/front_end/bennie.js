// on click something happens
const nachoButton = document.querySelector("#show-nachos")
const newNachoForm = document.querySelector("#new-nacho-form")
// const nachoInput = newNachoForm.querySelector("#legend")

newNachoForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // console.log(e.target)
  // nachoInput.value
  const inputValue = e.target.firstElementChild.value

  fetch('http://localhost:3000/api/v1/nachos', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      nachoName: inputValue
    })
  })
  .then(function(res) {
    return res.json()
  })
  .then(function(nacho) {
    console.log(nacho)
  })

})

console.log(newNachoForm)



// console.log(nachoButton)
nachoButton.addEventListener("click", function(e) {
  // e.preventDefault() dont need right now
  // console.log(e.target)

  fetch('http://localhost:3000/api/v1/nachos')
    .then(function(res){
      return res.json()
    })
    .then(function(nachos){
      // slap it on the dOM

      // grab the container from the front end
      const nachoContainer = document.querySelector("#nacho-container")
      // nachos.data[0].attributes.cheese
      nachoContainer.innerHTML = ''
      console.log(nachos)

      nachos.data.forEach(function(nacho) {
        const newNachoEl = document.createElement('p')
        newNachoEl.innerText = nacho.attributes.name
        nachoContainer.appendChild(newNachoEl)
      })

    })

})
