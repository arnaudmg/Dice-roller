const start = document.querySelector('.start')
const cubic = document.querySelector('.dice')
let counter = 0
let value = document.querySelector('.value')
let hasKeyframePlayed = false

let length = document.querySelector(".averageTable").rows.length;

const table = document.getElementById('table')


setTimeout(function () {
    hasKeyframePlayed = true;
}, 5000);

function random() {
    const nombre = Math.floor((Math.random() * 6) + 1);
    if (nombre == cubic.getAttribute('data-face')) {
        return random()
    } else {
        return nombre
    }
}

start.addEventListener('click', () => {
    if (!hasKeyframePlayed) return
    const number = random()
    cubic.setAttribute('data-face', number)
    const table = document.querySelector(".averageTable tbody")
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    counter++
    cell1.innerHTML = `You have roll the dice ${counter} times`
    cell2.innerHTML = number;
    var audio = document.querySelector('#audio')
    return audio.play()

    
})
// value.textContent = length - 3
for(var i=1; i < length; i++){
    value = value + parseInt(table.rows[i].cells[1].innerHTML)
    console.log(table.rows);
    
}