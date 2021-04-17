const cards = document.querySelectorAll('.card');

function flipCard() {

    //adiciona a classe flip ao elemento card clicado
    this.classList.toggle('flip');
}

cards.forEach((card)=>{
    card.addEventListener('click', flipCard);
})