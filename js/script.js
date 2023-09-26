const btns = document.querySelectorAll('.btn')
const menu = document.querySelector('.menu')
const menuimg = document.querySelector('.menu img')
const nav_btn = document.querySelector('.nav_btn')
const nav_list = document.querySelectorAll('.nav_list a')
const nav_contacts = document.querySelector('.nav_contacts')
const title = document.querySelector('.title')
const body = document.querySelector('body')
const menuEnd = document.querySelector('.menu .header_end')
const menuUl = document.querySelectorAll('.menu ul')


btns.forEach(function(btn, key){
  nav_btn.addEventListener('click', selectedTheme)
// изменение темы сайта
function selectedTheme(){
  if(btn.classList.contains('btn')){
    btn.classList.remove('btn')
    btn.classList.add('active')
    menu.style = 'z-index: 2;'
    nav_list.forEach(function(btn, key){
      btn.style = 'display: none;'
    })
    nav_contacts.style = 'display: none;'
    title.style = 'display: none;'
    menuimg.style = 'animation: menu 0.4s;'
    body.style = 'overflow: hidden;'
    menuEnd.style = 'display: flex;'
    menuUl.forEach(function(ul, key){
      ul.style = 'display: flex;'
    })
  }else{
    btn.classList.remove('active')
    btn.classList.add('btn')
    nav_list.forEach(function(btn, key){
      btn.style = 'display: flex;'
    })
    menu.style = 'z-index: 0;'
    nav_contacts.style = 'display: flex;'
    title.style = 'display: flex;'
    body.style = 'overflow: auto;'
    menuUl.forEach(function(ul, key){
      ul.style = 'display: none;'
    })
  }
}
})
