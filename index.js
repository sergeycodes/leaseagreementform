const optionBox = document.querySelector('#option-box')
const question = document.querySelector('#top-question')
const home = document.getElementById('home')
const apartment = document.getElementById('apartment')
const condo = document.getElementById('condo')
const room = document.getElementById('room')

const cards = document.querySelectorAll('card')

const continueBtn = document.querySelector('.continue-btn')

continueBtn.addEventListener('click', move)

function move() {
    var elem = document.getElementById("myBar")
    elem.style.width = 35 + '%'
    optionBox.style.display = "none"
    question.innerHTML = "What type of lease term?"


}

home.addEventListener('click', homeBorderBox)
apartment.addEventListener('click', apartmentBorderBox)
condo.addEventListener('click', condoBorderBox)
room.addEventListener('click', roomBorderBox)



function homeBorderBox() {
    home.style.border = "5px solid green"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "none"
}

function apartmentBorderBox() {
    home.style.border = "none"
    apartment.style.border = "5px solid green"
    condo.style.border = "none"
    room.style.border = "none"
}

function condoBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "5px solid green"
    room.style.border = "none"
}

function roomBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "5px solid green"
}

focusMethod = function getFocus() {
    document.getElementById("myTextField").focus();
  }