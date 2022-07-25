//Pegando o botão hamburguer do menu lateral:

const btn_menu = document.querySelector('.cabecalho__menu');

//Pegando todo o menu lateral:

const menu = document.querySelector('.menu-lateral');

//Criando o evento do botão:

btn_menu.addEventListener('click', ()=>{
    menu.classList.toggle('menu-lateral--ativo')
})