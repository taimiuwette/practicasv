document.getElementById('agregar').addEventListener('click', agregarTarea)

document
  .getElementById('nueva-tarea')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      agregarTarea()
    }
  })

function agregarTarea() {
  let tareaInput = document.getElementById('nueva-tarea')
  let tareaTexto = tareaInput.value.trim()

  if (tareaTexto !== '') {
    let lista = document.getElementById('lista-tareas')

    let li = document.createElement('li')
    li.textContent = tareaTexto

    let botonBorrar = document.createElement('span')
    botonBorrar.textContent = 'X'
    botonBorrar.className = 'borrar'
    botonBorrar.addEventListener('click', function () {
      lista.removeChild(li)
    })

    li.appendChild(botonBorrar)
    lista.appendChild(li)

    tareaInput.value = ''
  }
}
