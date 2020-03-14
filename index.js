const name = document.querySelector('#x')
const sup = document.querySelector('#tothepowerof')
const nametext = document.querySelector('#nametext')
const suptext = document.querySelector('#suptext')
function handlechange () {
  suptext.innerHTML = sup.value
  nametext.innerHTML = name.value
}
name.addEventListener('input', handlechange)
sup.addEventListener('input', handlechange)
