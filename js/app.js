const hamburgerBtn = document.querySelector(".menu-btn");
const wrapper=document.querySelector(".wrapper");
const menuImgSrc = document.querySelector('.button-src');
const cover = document.querySelector('.cover');

hamburgerBtn.addEventListener('click',()=>{
    wrapper.classList.toggle('show-wrapper');
    cover.classList.toggle('show-cover');

    if(wrapper.classList.contains('show-wrapper')){
        menuImgSrc.src='./images/close-btn.svg'
    }
    else{
      menuImgSrc.src="./images/hamburger-menu.svg";      
    }
})