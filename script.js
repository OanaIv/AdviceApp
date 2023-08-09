const bubble = document.getElementById("advice")
const button = document.getElementById("button")
const number = document.getElementById("numberOfAdvice")

function renderAdvice (adviceNumber, adviceText ) {
    number.textContent = `ADVICE #${adviceNumber}`
    bubble.textContent = `"${adviceText}"`
}

async function getAdvice () {

    const url = "https://api.adviceslip.com/advice"
  
    try {
        const response = await fetch(url)
        const data = await response.json()   
        renderAdvice(data.slip.id, data.slip.advice)   
    }
    catch(e) {
        console.log(e)
    }   
}

button.addEventListener('click', getAdvice)