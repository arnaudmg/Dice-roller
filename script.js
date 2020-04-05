const start = document.querySelector('.start')
const cubic = document.querySelector('.dice')
let counter = 0


function random (){
    const nombre = Math.floor((Math.random() * 6) + 1);
    if (nombre == cubic.getAttribute('data-face')){
        return random()
    }
    else{
        return nombre
    }
}



start.addEventListener('click', () =>{
    const number = random()
    cubic.setAttribute('data-face', number)
    var table = document.querySelector(".averageTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    counter ++
    cell1.innerHTML = `You have roll the dice ${counter} times`;
    cell2.innerHTML = number ;
}
)
console.log(cubic);


