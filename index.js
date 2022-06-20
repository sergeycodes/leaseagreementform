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
const landBackBtn = document.querySelector('.land-back-btn') 
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

//tenant js

const tenantTwo = document.querySelector('#tenant-two')
const addTenantEl = document.querySelector('.add-tenant')
const firstTenant = document.querySelector('#first-tenant')
const secondTenant = document.querySelector('#second-tenant')
addTenantEl.addEventListener('click', addTenant)

function addTenant() {
    firstTenant.innerHTML = "First Tenant"
    tenantTwo.style.display = "grid"
    secondTenant.innerHTML = "Second Tenant"
    addTenantEl.style.display = "none"
}

//rent js

const rentYes = document.querySelector('#rent-yes')
const rentNo = document.querySelector('#rent-no')
rentYes.addEventListener('click', rentYesBorderBox)
rentNo.addEventListener('click', rentNoBorderBox)
const monthlyRent = document.querySelector('.monthly-rent')
const rentButton = document.querySelector('.button')
const dayRent = document.querySelector('.day-payment')

const weeklyRent = document.querySelector('.weekly-container')
const weekly = document.querySelector('#weekly')
const biweekly = document.querySelector('#bi-weekly')
const annually = document.querySelector('#annually')
weekly.addEventListener('click', weeklyBorderBox)
biweekly.addEventListener('click', biweeklyBorderBox)
annually.addEventListener('click', annuallyBorderBox)
const example = document.querySelector('.example')

const weeklyAmount = document.querySelector('#rent-payment-input')
const weeklyDay = document.querySelector('#rent-day-input')

rentYes.style.border = "2px solid green"

function rentYesBorderBox() {
    rentYes.style.border = "2px solid green"
    rentNo.style.border = "none"
    monthlyRent.style.display = "grid"
    weeklyRent.style.display = "none"
    dayRent.style.display = "grid"
}

function rentNoBorderBox() {
    rentYes.style.border = "none"
    rentNo.style.border = "2px solid green"
    monthlyRent.style.display = "none"
    weeklyRent.style.display = "grid"
    dayRent.style.display = "none"
}

const firstDay = document.querySelector('#first-day')
const fifteenthDay = document.querySelector('#fifteenth-day')
const otherDay = document.querySelector('#other-day')
const chooseDay = document.querySelector('.choose-day')

firstDay.style.border = "4px solid green"

firstDay.addEventListener('click', firstDayBorderBox)
fifteenthDay.addEventListener('click', fifteenthDayBorderBox)
otherDay.addEventListener('click', otherDayBorderBox)

function firstDayBorderBox() {
    firstDay.style.border = "4px solid green"
    fifteenthDay.style.border = "none"
    otherDay.style.border = "none"
    chooseDay.style.display = "none"
}

function fifteenthDayBorderBox() {
    firstDay.style.border = "none"
    fifteenthDay.style.border = "4px solid green"
    otherDay.style.border = "none"
    chooseDay.style.display = "none"
}

function otherDayBorderBox() {
    firstDay.style.border = "none"
    fifteenthDay.style.border = "none"
    otherDay.style.border = "4px solid green"
    chooseDay.style.display = "grid"
}

weekly.style.border = "4px solid green"

function weeklyBorderBox() {
    weekly.style.border = "4px solid green"
    biweekly.style.border = "none"
    annually.style.border = "none"
    weeklyAmount.innerHTML = "Weekly Rent Payment:"
    weeklyDay.innerHTML = "What day of the week will payments be made?"
    example.innerHTML = "e.g. Sunday"
}

function biweeklyBorderBox() {
    weekly.style.border = "none"
    biweekly.style.border = "4px solid green"
    annually.style.border = "none"
    weeklyAmount.innerHTML = "Bi-Weekly Rent Payment:"
    weeklyDay.innerHTML = "What day of the week will payments be made?"
    example.innerHTML = "e.g. Sunday"
}

function annuallyBorderBox() {
    weekly.style.border = "none"
    biweekly.style.border = "none"
    annually.style.border = "4px solid green"
    weeklyAmount.innerHTML = "Yearly Rent Payment:"
    weeklyDay.innerHTML = "What day of the year will payments be made?"
    example.innerHTML = "e.g. January 1st"
}

//sign js

const unsure = document.querySelector('#unsure')
const fixeddate = document.querySelector('#fixeddate')
const fixeddateDate = document.querySelector('#fixeddate-date')
unsure.style.border = "4px solid green"

unsure.addEventListener('click', unsureBorderBox)
fixeddate.addEventListener('click', fixeddateBorderBox)

function unsureBorderBox() {
    unsure.style.border = "4px solid green"
    fixeddate.style.border = "none"
    fixeddateDate.style.display = "none"
}

function fixeddateBorderBox() {
    fixeddate.style.border = "4px solid green"
    unsure.style.border = "none"
    fixeddateDate.style.display = "grid"
}

//pdf js
const dlPdf = document.querySelector('#dl-pdf')
dlPdf.addEventListener('click', downloadPdf)

function downloadPdf() {
    var element = document.querySelector('.pdf')
    element.style.display = "block"
    html2pdf().from(element).save()
    console.log('downloaded')
}

const copyPdf = document.querySelector('#copy-pdf')
copyPdf.addEventListener('click', clipboardPdf)
function clipboardPdf() {
}