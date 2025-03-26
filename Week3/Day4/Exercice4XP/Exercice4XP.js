const input = document.getElementById('radius')
const volume = document.getElementById('volume')
const submit = document.getElementById('submit')




submit.addEventListener('click',function(event){
    event.preventDefault()
    let radius = parseFloat(input.value)
    let resultat = Math.pow(radius, 3) *4/3* (Math.PI)
    console.log(resultat);
    
    volume.value = resultat
})