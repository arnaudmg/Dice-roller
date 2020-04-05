const start = document.querySelector('.start')
const cubic = document.querySelector('.dice')
let counter = 0
var hasKeyframePlayed = false

setTimeout(function() { hasKeyframePlayed = true; }, 5000);

function random() {
    const nombre = Math.floor((Math.random() * 6) + 1);
    if (nombre == cubic.getAttribute('data-face')) {
        return random()
    } else {
        return nombre
    }
}

start.addEventListener('click', () => {
    if(!hasKeyframePlayed) return
    const number = random()
    cubic.setAttribute('data-face', number)
    const table = document.querySelector(".averageTable");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    counter++
    cell1.innerHTML = `You have roll the dice ${counter} times`;
    cell2.innerHTML = number;
})

