const form = document.querySelector('form')
console.log(form);

const inputs = document.querySelectorAll('input')
console.log(inputs)
inputs.forEach(input=> {
    

        console.log(input.id);
        console.log(input.name);

        
       
        
    
    
})
form.addEventListener('submit',function(event){
    event.preventDefault()
    const firstEl = document.getElementById('fname').value
const secondEl = document.getElementById('lname').value
console.log(firstEl)
console.log(secondEl);

})
;
const FirstLi = document.createElement('li')
const lastLi = document.createElement('li')
FirstLi.textContent = 'first name of the user'
lastLi.textContent = 'last name of the user'


const ul = document.querySelector('.usersAnswer')

ul.appendChild(FirstLi)
ul.appendChild(lastLi)

console.log(ul);

