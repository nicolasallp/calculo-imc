const alturaIn = document.querySelector('#inputAltura')
const pesoIn = document.querySelector('#inputPeso')
const btnSub = document.querySelector("#button")
let botaoClicado = false

btnSub.addEventListener('click', () => {
  botaoClicado = true
  validarInputs()
})

function validarInputs() {
  const nomeIn = document.querySelector('#inputNome')
  const sexos = document.querySelector('.sexos')
  const radios = document.querySelectorAll('input[name="sexo"]');
  let sexoMarcado = false;

  if (!nomeIn.value) {
    avisoErro(nomeIn, 'Por favor, insira seu nome', true)
    nomeIn.focus()
    return
  }
  
  if (!alturaIn.value) {
    if (document.activeElement === alturaIn || botaoClicado) {
      avisoErro(alturaIn, 'Por favor, insira sua altura', true)
    }
    alturaIn.focus()
    return
  }

  if (!pesoIn.value) {
    if (document.activeElement === pesoIn || botaoClicado) {
      avisoErro(pesoIn, 'Por favor, insira seu peso', true)
    }
    pesoIn.focus()
    return
  }

  radios.forEach((radio) => {
    if (radio.checked) {
      sexoMarcado = true;
    }
  });

  if (!sexoMarcado) {
    avisoErro(sexos, 'Por favor, insira seu sexo', false)
    return
  }

  btnSub.type = 'submit'
}

const error = document.createElement("p")
function avisoErro(inputDiv, aviso, border) {
  inputDiv.parentNode.insertBefore(error, inputDiv.nextSibling)
  error.id = "error-check"
  error.style.animation = "horizontal-shaking infinite .3s"
  setTimeout(animErro, 300)
  function animErro() {
    error.style.animation = "none"
  }
  error.textContent = aviso
  if (border) {
    inputDiv.style.border = "1px solid red"
  } else {
    inputDiv.style.border = "none"
  }
  inputDiv.style.outline = "none"
}

const inputEl = document.querySelectorAll("input")
inputEl.forEach((element) => {
  element.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      validarInputs()
    }
  })
})

inputEl.forEach((element) => {
  element.addEventListener("input", () => {
    if (error.previousSibling === element) {
      error.innerHTML = null
      element.style.border = "1px solid rgba(0, 0, 0, 0.3)"
    }
  })
})

function adicionarVirgula(inputElement) {
  let inputValue = inputElement.value
  inputValue = inputValue.replace(",", "")

  if (inputValue.length >= 3) {
    inputValue = `${inputValue.substring(0, inputValue.length - 2)},${inputValue.substring(inputValue.length - 2)}` 
  }

  inputElement.value = inputValue
}

alturaIn.addEventListener('keydown', (event) => {
  if (!(/[0-9]/.test(event.key) || (event.key === 'Backspace') || (event.key === 'Enter') || (event.key === 'Tab'))) {
    event.preventDefault()
  }
})
alturaIn.addEventListener('input', () => {
  adicionarVirgula(alturaIn)
})

pesoIn.addEventListener('keydown', (event) => {
  if (!(/[0-9]/.test(event.key) || (event.key === 'Backspace') || (event.key === 'Enter') || (event.key === 'Tab'))) {
    event.preventDefault()
  }
})
pesoIn.addEventListener('input', () => {
  adicionarVirgula(pesoIn)
})
