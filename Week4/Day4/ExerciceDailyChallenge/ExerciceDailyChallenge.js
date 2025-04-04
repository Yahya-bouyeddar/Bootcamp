const result = document.getElementById('result')
const form = document.querySelector('form')
const submit = document.getElementById('submit')

form.addEventListener('submit',function(event){
    event.preventDefault()
   const firstName = document.getElementById('firstName').value
   const lastName = document.getElementById('lastName').value

   const user = {
    userName : firstName,
    userLastName : lastName

   }
   const json = JSON.stringify(user)

   result.textContent=json

})