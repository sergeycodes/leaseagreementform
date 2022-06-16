const propertyEl = document.querySelector('.property')
const home = document.getElementById('home')
const apartment = document.getElementById('apartment')
const condo = document.getElementById('condo')
const room = document.getElementById('room')
const continueBtn = document.querySelector('.continue-btn')
continueBtn.addEventListener('click', firstContinue)

const leaseEl = document.querySelector('.leaseterm')

function firstContinue() {
    var elem = document.getElementById("myBar")
    elem.style.width = 35 + '%'
    propertyEl.style.display = "none" 
    leaseEl.style.display = "flex"

}

home.addEventListener('click', homeBorderBox)
apartment.addEventListener('click', apartmentBorderBox)
condo.addEventListener('click', condoBorderBox)
room.addEventListener('click', roomBorderBox)
let selectedProperty = "" 

function homeBorderBox() {
    home.style.border = "5px solid green"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "none"
    selectedProperty = "home"
}

function apartmentBorderBox() {
    home.style.border = "none"
    apartment.style.border = "5px solid green"
    condo.style.border = "none"
    room.style.border = "none"
    selectedProperty = "apartment"
}

function condoBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "5px solid green"
    room.style.border = "none"
    selectedProperty = "condo"
}

function roomBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "5px solid green"
    selectedProperty = "room"
}

//lease js

const fixedDate = document.querySelector('#fixed-date')
const month = document.querySelector('#month') 
const year = document.querySelector('#year') 

fixedDate.addEventListener('click', fixedDateBorderBox)
month.addEventListener('click', monthBorderBox)
year.addEventListener('click', yearBorderBox)
let selectedLease = "" 

function fixedDateBorderBox() {
    fixedDate.style.border = "5px solid green"
    month.style.border = "none"
    year.style.border = "none"
    selectedLease = "fixedDate"
}

function monthBorderBox() {
    fixedDate.style.border = "none"
    month.style.border = "5px solid green"
    year.style.border = "none"
    selectedLease = "month"
}

function yearBorderBox() {
    fixedDate.style.border = "none"
    month.style.border = "none"
    year.style.border = "5px solid green"
    selectedLease = "year"
}

const backBtn = document.querySelector('.back-btn')
backBtn.addEventListener('click', backButton)

function backButton() {
    leaseEl.style.display = "none"
    propertyEl.style.display = "grid"
    var elem = document.getElementById("myBar")
    elem.style.width = 5 + '%'
}