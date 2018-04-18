let navMobile = document.querySelector('nav.menu-mobile');

const mostrarMenu = function(){
    if(navMobile.style.transform == `translateY(-130%)`){
        navMobile.style.transform = `translateY(0)`;
    } else {
        navMobile.style.transform = `translateY(-130%)`
    }
}