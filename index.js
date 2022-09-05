
document.addEventListener('DOMContentLoaded',() => {
document.querySelector('button').addEventListener('click', showAnimal)

function showAnimal(){
  fetch("https://africananimalfacts.herokuapp.com/rand")
    .then(res => res.json())
    .then(showAnimal => {
      console.log(showAnimal)
      document.querySelector('#source').innerText = `source: ${showAnimal.source}`
    document.querySelector('#fact').innerText = `fact: ${showAnimal.fact}`
    document.querySelector('#animal').innerText = `animal: ${showAnimal.animal}`
    
    })
    
}
});