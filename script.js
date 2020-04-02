const start = document.querySelector('.start')
const cubic = document.querySelector('.dice')


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
    cubic.setAttribute('data-face', random())
}
)
console.log(cubic);


