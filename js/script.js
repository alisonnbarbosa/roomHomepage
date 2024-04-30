const btleft = document.getElementById('btleft')
const btright = document.getElementById('btright')
const img = document.getElementById('img')
let contador = 1; 

const trocarImagem = (num)=>{
    contador = contador + num

    if(contador > 3){
        contador=1
    } else if(contador < 1){
        contador=3
    }
    img.src = `img/desktop-image-hero-${contador}.jpg`
}

btleft.addEventListener('click', ()=> trocarImagem(-1))
btright.addEventListener('click', ()=> trocarImagem(1))