const toggle = document.querySelectorAll('.question')

toggle.forEach(e => {
  e.addEventListener('click', () => {
    e.nextElementSibling.classList.toggle('active')
    e.childNodes[3].classList.toggle('rotate')
  })
});