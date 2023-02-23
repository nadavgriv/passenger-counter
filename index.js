// document.getElementById("count").innerText = 5
let sumOfPeople = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
console.log(countEl)
function addoOnePepuole () {
    console.log("clicked")
    sumOfPeople = sumOfPeople +1
    console.log("sumOfPeople")
    countEl.innerText = sumOfPeople

}

function save() {
    count = sumOfPeople + " - "
    sumOfPeople = 0
    saveEl.innerText += count
    console.log(sumOfPeople)
    countEl.innerText = 0
}


let username = "nadav"
let massage  = "You have tree new notifications"
let newMasage = username + ", " + massage
console.log(newMasage)
