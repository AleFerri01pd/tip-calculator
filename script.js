/* 
🌟 APP: Tip Calculator

calculateBill()
increasePeople()
decreasePeople()

#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    let billTotal = Number(billTotalInput.value)
    let tipPercetange = Number(tipInput.value) / 100
    let totalTipAmount = billTotal * tipPercetange
    let total = totalTipAmount + billTotal
    let perPersonTotal = total / numberOfPeople
    
    perPersonTotalDiv.innerText = `$${Number(perPersonTotal.toFixed(2))}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
    numberOfPeople++

    numberOfPeopleDiv.innerText = Number(numberOfPeople)

    calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    if(Number(numberOfPeople) === 1) {
        alert("You can't decrease 1")
        return
    }

    numberOfPeople--

    numberOfPeopleDiv.innerText = Number(numberOfPeople)

    calculateBill()
}