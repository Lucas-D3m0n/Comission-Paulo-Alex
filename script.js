const open_button = document.getElementById('open_menu')
const menu = document.getElementById('nav');

open_button.onclick = function abrirMenu(){

    menu.classList.add('menu')

}

const close_menu = document.getElementById('close_menu')

close_menu.onclick = function fecharMenu(){
    menu.classList.remove('menu')
}

const links = document.querySelectorAll('.link')

function findIt(){
    menu.classList.remove('menu')
}

links.forEach(links =>{
    links.addEventListener('click', findIt)
})
