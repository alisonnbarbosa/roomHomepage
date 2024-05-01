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

    trocarTextos(contador)
}

btleft.addEventListener('click', ()=> trocarImagem(-1))
btright.addEventListener('click', ()=> trocarImagem(1))

/*troca o conteúdo dos textos do site*/

const h1 = document.getElementById('h1')
const p = document.getElementById('p')//parágrafo

const trocarTextos = (num)=> {
    
    if(num == 1){
        h1.textContent = 'Discover innovative ways to decorate'
        p.textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    } else if(num == 2){
        h1.textContent = 'We are available all across the globe'
        p.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else{
        h1.textContent = 'Manufactured with the best materials'
        p.textContent = 'ur modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
}
trocarTextos(contador)