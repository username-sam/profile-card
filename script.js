let btn = document.querySelector(".btn-follow");
let contact = document.querySelector('.btn-msg');
let conInfo = document.querySelector('.contact-info')
let container = document.querySelector('.card-container')


btn.addEventListener('click',function (e) {
  btn.textContent = 'Following'
})

contact.addEventListener('click',function (e) {
  conInfo.classList.add('show');  
  container.style.animationName = 'fadeIn'
})
