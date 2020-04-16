const start = document.querySelector('.start')
const cubic = document.querySelector('.dice')
let counter = 0
const value = document.querySelector('.value')
let hasKeyframePlayed = false
let length = document.querySelector('.averageTable').rows.length;
const table = document.querySelector('.averageTable')
const subBackground = document.querySelectorAll('.subBackground img')
let sumValue = 0

setTimeout(function () {
    hasKeyframePlayed = true
    start.classList.remove('noclick')
}, 5000)

function random() {
    const number = Math.floor((Math.random() * 6) + 1);
    if (number == cubic.getAttribute('data-face')) {
        return random()
    } else {
        return number
    }
}

start.addEventListener('click', () => {
    if (!hasKeyframePlayed) return 
    const number = random()
    cubic.setAttribute('data-face', number)
    const table = document.querySelector('.averageTable tbody')
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    counter++
    cell1.textContent = `You have roll the dice ${counter} times`
    cell2.textContent = number

    const audio = document.querySelector('.audio')
    audio.play()

    sumValue += number
    const average = sumValue / (table.rows.length - 1)

    value.innerText = average.toFixed(3)
})

document.querySelectorAll('.background-selector').forEach((bgselector) => {
    bgselector.addEventListener("click", () => {

        document.body.style.backgroundImage = `url(${bgselector.getAttribute('data-path')})`
    })
})

//     for(var i = 1; i < table.rows.length; i++){
//         value = parseInt(table.rows[i].cells[1].innerHTML)
//     }
// sumValue += value / (table.rows.length - 1)
// console.log(sumValue);  
// console.log(table.rows.length);