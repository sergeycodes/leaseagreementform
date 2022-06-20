const propertyEl = document.querySelector('.property')
const home = document.getElementById('home')
const apartment = document.getElementById('apartment')
const condo = document.getElementById('condo')
const room = document.getElementById('room')
const continueBtn = document.querySelector('.continue-btn')
continueBtn.addEventListener('click', firstContinue)


const elem = document.getElementById("myBar")
elem.style.transition = "2s"

function firstContinue() {       
        elem.style.width = 25 + '%'
        propertyEl.style.display = "none" 
        leaseEl.style.display = "grid"
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
const leaseEl = document.querySelector('.leaseterm')
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

const leaseContinueBtn = document.querySelector('#lease-continue-btn')
leaseContinueBtn.addEventListener('click', leaseContinue)

function leaseContinue() {
    leaseEl.style.display = "none"
    propertyDetails.style.display = "grid"
    elem.style.width = 50 + '%'
}

//details js

const individual = document.querySelector('#individual')
const corporation = document.querySelector('#corporation')

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
//property details js
const propertyDetails = document.querySelector('.property-details')
const propertyBackBtn = document.querySelector('#property-back-btn')
const propertyContinueBtn = document.querySelector('#property-continue-btn')
propertyBackBtn.addEventListener('click', propertyBack)
propertyContinueBtn.addEventListener('click', propertyContinue)

function propertyBack() {
    leaseEl.style.display = "grid"
    propertyDetails.style.display = "none"
    elem.style.width = 25 + '%'
}

function propertyContinue() {
    propertyDetails.style.display = "none"
    landlordDetails.style.display = "grid"
    elem.style.width = 55 + '%'
}

//landlord details js
const landlordDetails = document.querySelector('.landlord-details')
const landlordBackBtn = document.querySelector('#land-back-btn')
const landlordContinueBtn = document.querySelector('#land-continue-btn')
landlordBackBtn.addEventListener('click', landlordBack)
landlordContinueBtn.addEventListener('click', landlordContinue)

function landlordBack() {
    propertyDetails.style.display = "grid"
    landlordDetails.style.display = "none"
    elem.style.width = 52.5 + '%'
}

function landlordContinue() {
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "grid"
    elem.style.width = 62.5 + '%'
}

//tenant js
const tenantDetails = document.querySelector('.tenant-details')
const tenantTwo = document.querySelector('#tenant-two')
const addTenantEl = document.querySelector('.add-tenant')
const deleteTenantEl = document.querySelector('#delete-tenant')
const firstTenant = document.querySelector('#first-tenant')
const secondTenant = document.querySelector('#second-tenant')
addTenantEl.addEventListener('click', addTenant)
deleteTenantEl.addEventListener('click', deleteTenant)

function addTenant() {
    firstTenant.innerHTML = "First Tenant"
    tenantTwo.style.display = "grid"
    secondTenant.innerHTML = "Second Tenant"
    addTenantEl.style.display = "none"
    deleteTenantEl.style.display = "grid"
}

function deleteTenant() {
    firstTenant.innerHTML = "Tenant"
    tenantTwo.style.display = "none"
    addTenantEl.style.display = "grid"
    deleteTenantEl.style.display = "none"
}

const tenantBackBtn = document.querySelector('#tenant-back-btn')
const tenantContinueBtn = document.querySelector('#tenant-continue-btn')
tenantBackBtn.addEventListener('click', tenantBack)
tenantContinueBtn.addEventListener('click', tenantContinue)



function tenantBack() {
    landlordDetails.style.display = "grid"
    tenantDetails.style.display = "none"
    elem.style.width = 57.5 + '%'
}

function tenantContinue() {
    tenantDetails.style.display = "none"
    rentDetails.style.display = "grid"
    elem.style.width = 67.5 + '%'
}

//rent js
const rentDetails = document.querySelector('.rent-details')
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

const rentBackBtn = document.querySelector('#rent-back-btn')
const rentContinueBtn = document.querySelector('#rent-continue-btn')
rentBackBtn.addEventListener('click', rentBack)
rentContinueBtn.addEventListener('click', rentContinue)

function rentBack() {
    rentDetails.style.display = "none"
    tenantDetails.style.display = "grid"
    elem.style.width = 62.5 + '%'
}

function rentContinue() {
    rentDetails.style.display = "none"
    signDetails.style.display = "grid"
    elem.style.width = 75 + '%'

}

//sign js
const signDetails = document.querySelector('.sign-details')
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

const signBackBtn = document.querySelector('#sign-back-btn')
const signContinueBtn = document.querySelector('#sign-continue-btn')
signBackBtn.addEventListener('click', signBack)
signContinueBtn.addEventListener('click', signContinue)

function signBack() {
    signDetails.style.display = "none"
    rentDetails.style.display = "grid"
    elem.style.width = 67.5 + '%'
}

function signContinue() {
    signDetails.style.display = "none"
    pdfDetails.style.display = "grid"
    elem.style.width = 100 + '%'
}

//pdf js
const pdfDetails = document.querySelector('.pdf-download')
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

//buttons

const pdfBackBtn = document.querySelector('#pdf-back-btn')
pdfBackBtn.addEventListener('click', pdfBack)

function pdfBack() {
    pdfDetails.style.display = "none"
    signDetails.style.display = "grid"
    elem.style.width = 72.5 + '%'
}

//list buttons 

const listPropertyBtn = document.querySelector('#list-property')
const listLeaseBtn = document.querySelector('#list-lease')
const listDetailsBtn = document.querySelector('#list-details')
const listSignBtn = document.querySelector('#list-sign')
const listPdfBtn = document.querySelector('#list-download')

listPropertyBtn.addEventListener('click', listProperty)
listLeaseBtn.addEventListener('click', listLease)
listDetailsBtn.addEventListener('click', listDetails)
listSignBtn.addEventListener('click', listSign)
listPdfBtn.addEventListener('click', listPdf)

function listProperty() {
    propertyEl.style.display = "grid"
    leaseEl.style.display = "none"
    propertyDetails.style.display = "none" 
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "none"
    rentDetails.style.display = "none"
    signDetails.style.display = "none"
    pdfDetails.style.display = "none"

    elem.style.width = 5 + '%'
}

function listLease() {
    propertyEl.style.display = "none"
    leaseEl.style.display = "grid"
    propertyDetails.style.display = "none" 
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "none"
    rentDetails.style.display = "none"
    signDetails.style.display = "none"
    pdfDetails.style.display = "none"

    elem.style.width = 25 + '%'
}

function listDetails() {
    propertyEl.style.display = "none"
    leaseEl.style.display = "none"
    propertyDetails.style.display = "grid" 
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "none"
    rentDetails.style.display = "none"
    signDetails.style.display = "none"
    pdfDetails.style.display = "none"

    elem.style.width = 50 + '%'
}

function listSign() {
    propertyEl.style.display = "none"
    leaseEl.style.display = "none"
    propertyDetails.style.display = "none" 
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "none"
    rentDetails.style.display = "none"
    signDetails.style.display = "grid"
    pdfDetails.style.display = "none"

    elem.style.width = 75 + '%'
}

function listPdf() {
    propertyEl.style.display = "none"
    leaseEl.style.display = "none"
    propertyDetails.style.display = "none" 
    landlordDetails.style.display = "none"
    tenantDetails.style.display = "none"
    rentDetails.style.display = "none"
    signDetails.style.display = "none"
    pdfDetails.style.display = "grid"

    elem.style.width = 100 + '%'

    editPdf()
}

//pdf edit

const propertySelected = document.querySelector('#selected-property')

function editPdf() {
    propertySelected.innerHTML = "Renting a " + selectedProperty + " for: "
}













