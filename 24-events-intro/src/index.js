console.log('%c nice', 'color: green')

window.addEventListener('DOMContentLoaded', function() {
  console.log('document is', document)
  // DOM node .addEventListener('event', handler)

  const form = document.querySelector('#comment-form')
  form.addEventListener('submit', (eventObj) => {
    console.log(eventObj)
    eventObj.preventDefault()
    console.log(eventObj.target)
    console.log('FORM WUZ SUBMITTED')
  })

  document.querySelector("#helicopter-parent").addEventListener('click', (event) => {
    // console.log(event.target.tagName)
    if (event.target.tagName === 'BUTTON') {
      switch (event.target.dataset.name) {
        case "log":
          console.log("THE LOG BUTTON WAS CLICKED")
          break
        case "alert":
          alert("DANGER OPS")
          break
        case "error":
          console.error("SOMETHING IS ON FIRE U SHOULD PANIC")
          break;
        default:

      }
    }
  })

  document.body.addEventListener('click', function (event) {
    // console.log(event.target)
    // console.log('OMG THE USER CLICKED SOMETHING')
  })

})
