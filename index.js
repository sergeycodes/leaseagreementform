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
const tenantTwo = document.querySelector('.tenant-two')
const addTenantEl = document.querySelector('#add-tenant')
const deleteTenantEl = document.querySelector('#delete-tenant')
const firstTenant = document.querySelector('#first-tenant')
const secondTenant = document.querySelector('.second-tenant')
const secondTenantEl = document.querySelector('#tenant-two')
addTenantEl.addEventListener('click', addTenant)
deleteTenantEl.addEventListener('click', deleteTenant)

function addTenant() {
    firstTenant.innerHTML = "First Tenant"
    tenantTwo.style.display = "grid"
    addTenantEl.style.display = "none"
    deleteTenantEl.style.display = "grid"
    numberOfTenants = 2
}

function deleteTenant() {
    firstTenant.innerHTML = "Tenant"
    tenantTwo.style.display = "none"
    addTenantEl.style.display = "grid"
    deleteTenantEl.style.display = "none"
    numberOfTenants = 1
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
const weeklyDay = document.querySelector('#rent-week-input')

rentYes.style.border = "2px solid green"

function rentYesBorderBox() {
    rentYes.style.border = "2px solid green"
    rentNo.style.border = "none"
    monthlyRent.style.display = "grid"
    weeklyRent.style.display = "none"
    dayRent.style.display = "grid"
    rentMonthly = true
}

function rentNoBorderBox() {
    rentYes.style.border = "none"
    rentNo.style.border = "2px solid green"
    monthlyRent.style.display = "none"
    weeklyRent.style.display = "grid"
    dayRent.style.display = "none"
    rentMonthly = false
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
    otherDayInput.value = ""

    rentDueDay = "first day"
}

function fifteenthDayBorderBox() {
    firstDay.style.border = "none"
    fifteenthDay.style.border = "4px solid green"
    otherDay.style.border = "none"
    chooseDay.style.display = "none"
    otherDayInput.value = ""

    rentDueDay = "fifteenth day"
}

const otherDayInput = document.querySelector('#other-day-input')

function otherDayBorderBox() {
    firstDay.style.border = "none"
    fifteenthDay.style.border = "none"
    otherDay.style.border = "4px solid green"
    chooseDay.style.display = "grid"

    rentDueDay = "other"
}

weekly.style.border = "4px solid green"

function weeklyBorderBox() {
    weekly.style.border = "4px solid green"
    biweekly.style.border = "none"
    annually.style.border = "none"
    weeklyAmount.innerHTML = "Weekly Rent Payment:"
    weeklyDay.innerHTML = "What day of the week will payments be made?"
    example.innerHTML = "e.g. Sunday"
    
    otherDayInput.value = ""

    rentDay = 7
}

function biweeklyBorderBox() {
    weekly.style.border = "none"
    biweekly.style.border = "4px solid green"
    annually.style.border = "none"
    weeklyAmount.innerHTML = "Bi-Weekly Rent Payment:"
    weeklyDay.innerHTML = "What day of the week will payments be made?"
    example.innerHTML = "e.g. Sunday"

    otherDayInput.value = ""

    rentDay = 14
}

function annuallyBorderBox() {
    weekly.style.border = "none"
    biweekly.style.border = "none"
    annually.style.border = "4px solid green"
    weeklyAmount.innerHTML = "Yearly Rent Payment:"
    weeklyDay.innerHTML = "What day of the year will payments be made?"
    example.innerHTML = "e.g. January 1st"

    otherDayInput.value = ""

    rentDay = 365
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
const dateFixedDate = document.querySelector('#fixed-date-date')

unsure.addEventListener('click', unsureBorderBox)
fixeddate.addEventListener('click', fixeddateBorderBox)

function unsureBorderBox() {
    unsure.style.border = "4px solid green"
    fixeddate.style.border = "none"
    fixeddateDate.style.display = "none"
    dateFixedDate.value = ""
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

    editPdf()
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

let numberOfTenants = 1
let selectedProperty = "home"
let rentMonthly = true
let rentDay = 0
rentDueDay = "first day"

const propertySelected = document.querySelector('#selected-property')
const streetAdress = document.querySelector('#street-address')

function editPdf() {
    //landlord info
    
    if($('#landlord-fullname').val()){
        $('#landlord-name').html($('#landlord-fullname').val())
    }
    if($('#street-address').val()){
        $('#landlord-street-address').html($('#street-address').val())
    }
    if($('#city-state-zip').val()){
        $('#landlord-city-state').html($('#city-state-zip').val())
    }
    if($('#landlord-phonenumber').val()){
        $('#landlord-phone').html($('#landlord-phonenumber').val())
    }
    $('#landlord-email').html($('#landlord-emailaddress').val())

    //tenant info
    if($('#tenant-one-fullname').val()){
        $('#tenant-name').html($('#tenant-one-fullname').val())
    }
    $('#tenant-one-birthday').html($('#tenant-birthday').val())
    $('#tenant-one-phone').html($('#tenant-phone').val())
    $('#tenant-one-email').html($('#tenant-email').val())

    //tenant two
    if($('#tenant-two-fullname').val()){
        $('.tenant-two-name').html($('#tenant-two-fullname').val())
    }
    $('.tenant-two-birthday').html($('#tenant-two-birthday').val())
    $('.tenant-two-phone').html($('#tenant-two-phone').val())
    $('.tenant-two-email').html($('#tenant-two-email').val())


    //rent
    $('#selected-property').html("Renting a " + selectedProperty + " for: ")
    $('#first-tenant-pdf').html($('#tenant-one-fullname').val())
    $('#second-tenant-pdf').html($('#tenant-two-fullname').val())
    
    //period
    if(rentMonthly === true) {
        $('#lease-term-pdf-info').html("Payments will be Monthly")
        $('#rent-pdf-info').html("Amount: $" + $('#monthly-payment').val() + "(includes utilities, water, and garbage)")
        if(rentDueDay==="other"){
            $('#rent-time-pdf-info').html("Rent is due every " + $('#other-day-input').val())
        }else{$('#rent-time-pdf-info').html("Rent is due every " + rentDueDay)}
        
    }else{
        if(rentDay = 7){
            $('#lease-term-pdf-info').html("Payments will be Weekly")
            $('#rent-pdf-info').html("Amount: $" + $('#weekly-rent').val() + " (includes utilities, water, and garbage)")
            $('#rent-time-pdf-info').html("Rent is due every " + $('#rent-week-input').val())
        }else if(rentDay = 14){
            $('#lease-term-pdf-info').html("Payments will be Bi-weekly")
            $('#rent-pdf-info').html("Amount: $" + $('#weekly-rent').val() + " (includes utilities, water, and garbage)")
            $('#rent-time-pdf-info').html("Rent is due every other " + $('#rent-week-input').val())
        }else if(rentDay = 365){
            $('#lease-term-pdf-info').html("Payments will be Annually")
            $('#rent-pdf-info').html("Amount: $" + $('#weekly-rent').val() + " (includes utilities, water, and garbage)")
            $('#rent-time-pdf-info').html("Rent is due every " + $('#rent-week-input').val())
        }
    }
    
    
    

    //signiture
    if($('#landlord-fullname').val()){
        $('#landlord-name-pdf').html($('#landlord-fullname').val() + " (landlord)")
    }
    if($('#tenant-one-fullname').val()){
        $('#tenant-name-pdf').html($('#tenant-one-fullname').val() + " (tenant)")
    }

    $('.sign-date-pdf').html("______________________ " + $('#fixed-date-date').val())
   
    if(numberOfTenants === 2){
        $('#tenant-two-name-pdf').html($('#tenant-two-fullname').val() + " (tenant)")
        $('.sign-date-two-pdf').html("______________________ " + $('#fixed-date-date').val())
    }
}













