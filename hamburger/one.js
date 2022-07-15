const menu_btn = document.querySelector('.menu_bar')
const mobile_btn = document.querySelector('.mobile-nav')
  menu_btn.addEventListener('click', ()=>{
    menu_btn.classList.toggle('is-active')
    mobile_btn.classList.toggle('is-active')
  })