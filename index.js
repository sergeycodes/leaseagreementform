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
home.style.border = "5px solid green"
let selectedProperty = "" 

function homeBorderBox() {
    
    home.style.border = "4px solid green"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "none"
    selectedProperty = "home"
}

function apartmentBorderBox() {
    home.style.border = "none"
    apartment.style.border = "4px solid green"
    condo.style.border = "none"
    room.style.border = "none"
    selectedProperty = "apartment"
}

function condoBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "4px solid green"
    room.style.border = "none"
    selectedProperty = "condo"
}

function roomBorderBox() {
    home.style.border = "none"
    apartment.style.border = "none"
    condo.style.border = "none"
    room.style.border = "4px solid green"
    selectedProperty = "room"
}


//lease js

const fixedDate = document.querySelector('#fixed-date')
const month = document.querySelector('#month') 
const year = document.querySelector('#year') 
const startDate = document.querySelector('#start-date')
const endDate = document.querySelector('#end-date')

fixedDate.addEventListener('click', fixedDateBorderBox)
month.addEventListener('click', monthBorderBox)
year.addEventListener('click', yearBorderBox)
let selectedLease = "" 


fixedDate.style.border = "5px solid green"

function fixedDateBorderBox() {
    fixedDate.style.border = "4px solid green"
    month.style.border = "none"
    year.style.border = "none"
    selectedLease = "fixedDate"
    endDate.style.display = "grid"
}

function monthBorderBox() {
    fixedDate.style.border = "none"
    month.style.border = "4px solid green"
    year.style.border = "none"
    selectedLease = "month"
    endDate.style.display = "none"
}

function yearBorderBox() {
    fixedDate.style.border = "none"
    month.style.border = "none"
    year.style.border = "4px solid green"
    selectedLease = "year"
    endDate.style.display = "none"
}

const backBtn = document.querySelector('.back-btn')
backBtn.addEventListener('click', backButton)

function backButton() {
    leaseEl.style.display = "none"
    propertyEl.style.display = "grid"
    var elem = document.getElementById("myBar")
    elem.style.width = 5 + '%'
}

const continueTwoBtn = document.querySelector('#continue-two')

//details js

const individual = document.querySelector('#individual')
const corporation = document.querySelector('#corporation')
const landBackBtn = document.querySelector('#land-back-btn') 
landBackBtn.addEventListener('click', backButton)

individual.addEventListener('click', individualBorderBox)
corporation.addEventListener('click', corporationBorderBox)

let selectedLandlord = "individual"
individual.style.border = "4px solid green"

function individualBorderBox() {
    individual.style.border = "4px solid green"
    corporation.style.border = "none"
    selectedLandlord = "individual"
}

function corporationBorderBox() {
    individual.style.border = "none"
    corporation.style.border = "4px solid green"
    selectedLandlord = "corporation"
}