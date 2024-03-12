// Funcionalidade do botão cadastre-se
let Button = document.getElementById("cadastro");

Button.addEventListener("click", ()=>{
    console.log("O botao foi clicado!");
});

//Visibilidade de senha
function togglePasswordVisibility(){
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('#toggleIcon img');

    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        toggleIcon.src = 'img/olho_aberto.png';
    }else {
        passwordInput.type = 'password';
        toggleIcon.src = 'img/olho.png';
    }
}

document.querySelector('#toggleIcon').addEventListener('click', togglePasswordVisibility);

