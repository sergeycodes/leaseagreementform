let cards = document.getElementById("card")
let cardsEl = document.querySelectorAll(".card")

function move() {
    var elem = document.getElementById("myBar")
    elem.style.width = 35 + '%'
}

cardsEl.addEventListener('click', borderBox, false)

function borderBox() {
    console.log("clicked")
}

focusMethod = function getFocus() {
    document.getElementById("myTextField").focus();
  }