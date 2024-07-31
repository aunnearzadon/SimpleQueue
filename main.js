document.getElementById("next").addEventListener('click', function(){
  next()
})

document.getElementById("issue-number").addEventListener('click', function(){
  issueNumber()
})

document.getElementById("reset").addEventListener('click', function(){
  reset()
})

document.getElementById('number-limit').addEventListener('change', function(){
  disableButton()
})

const next = () => {
  const number = document.getElementById("number")
  let current = parseInt(number.innerHTML)
  number.innerHTML = ++current
  calloutNumber(current)
  disableButton()
}

const issueNumber = () => {
  const input = document.getElementById('last-issued-number')
  let lastIssued = parseInt(input.value)
  input.value = ++lastIssued
  disableButton()
}

const reset = () => {
  document.getElementById("number").innerHTML = 0
  document.getElementById('last-issued-number').value = 0
  document.getElementById('number-limit').value = 0
  disableButton()
}

const calloutNumber = (number) => {
  const text = `calling number ${number}`
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech)
}

const disableButton = () => {
  const current = parseInt(document.getElementById("number").innerHTML)
  const lastIssued = parseInt(document.getElementById('last-issued-number').value)
  const limit = parseInt(document.getElementById('number-limit').value)
  if(current == lastIssued || current == limit) {
    document.getElementById("next").disabled = true
  } else {
    document.getElementById("next").disabled = false
  }
}