const menu = document.querySelector('.links--mobile');
const showMobileMenu = document.querySelector('.drop-down--menu');
const close = document.querySelector('#close');
const container = document.querySelector('.container')

menu.addEventListener('click',()=>{
   showMobileMenu.classList.toggle('active');
   container.classList.add('blur');
   
   
});

close.addEventListener('click',()=>{
    showMobileMenu.classList.remove('active')
    container.classList.remove('blur');
});

document.addEventListener('click', (event)=>{
    if(!showMobileMenu.contains(event.target) && !menu.contains(event.target)){
        showMobileMenu.classList.remove('active')
        container.classList.remove('blur');
    }
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 600){
        showMobileMenu.classList.remove('active')
        container.classList.remove('blur');
        
    }
});