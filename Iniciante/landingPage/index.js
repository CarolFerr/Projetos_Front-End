const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function() {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () =>{
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth'})
});

/* Contador de corações*/

// obtém o elemento do ícone de coração
const homeHeart = document.querySelector('.bx.bxs-home-heart');

// Inicializa o contador de curtidas com o valor atual (258)
let countLiked = parseInt(document.querySelector('.icon-box p').textContent);

// Adiciona o event listener para o clique no ícone de coração
homeHeart.addEventListener('click', function(){
    // Incrementa o contador de curtidas
    countLiked++;

    //Atualiza o texto do elemento <p> para mostrar o novo número de curtidas
    document.querySelector('.icon-box p').textContent = countLiked;
});
