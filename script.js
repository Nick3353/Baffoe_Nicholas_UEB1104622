const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#menu-close');
const menu = document.querySelector('nav .navigation ul');
// show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block'; 
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';  
})

//hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'; 
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';  
})
