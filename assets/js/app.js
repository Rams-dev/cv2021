let menuButton = document.querySelector('.aside-button')
let aside = document.querySelector('.aside')
let loaderContent = document.querySelector('.loader')

menuButton.addEventListener('click', function(){
    aside.classList.toggle('aside-expand')

})


window.addEventListener('load', function(){
    loaderContent.innerHTML = "<div class='loading'>cargando...</div>"
    setTimeout(() => {
        loaderContent.innerHTML = ""
    }, 1000);

})


window.addEventListener('loadEnd', function(){
    loaderContent.innerHTML = "cargando..."

})