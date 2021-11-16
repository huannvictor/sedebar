const expense = document.querySelector('button#toggleMax')
const minimal = document.querySelector('button#toggleMini')

expense.addEventListener('click', function () {
  const minimal = document.querySelector('#sidebarMini')
  const expense = document.querySelector("#sidebarMax")
  minimal.classList.add('invisible')
  expense.classList.remove('invisible')
})

minimal.addEventListener('click', function () {
  const minimal = document.querySelector('#sidebarMini')
  const expense = document.querySelector("#sidebarMax")
  minimal.classList.remove('invisible')
  expense.classList.add('invisible')
})
