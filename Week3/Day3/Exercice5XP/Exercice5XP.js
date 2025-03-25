

const container = document.getElementById('container')
console.log(container)

const listItems = document.querySelectorAll(".list li")

listItems.forEach(item => {
    if(item.textContent == 'Pete'){
   item.textContent = 'Richard'
}
})
const uls = document.querySelectorAll(".list")

if (uls.length > 1){
    const secondUl = uls[1]
    const listItem = secondUl.querySelectorAll("li")

    if(listItem.length>1){

        secondUl.removeChild(listItem[1])

    }
}

uls.forEach(item =>  {
    const firstLi = item.getElementsByTagName('li')
    if(firstLi.length>0){
        firstLi[0].textContent = 'yahya elouazzani'
    }

    
  
})

uls.forEach(item => {
    item.classList.add("student_list")})

uls[0].classList.add("university", "attendance")
container.style.background = 'lightblue'

uls.forEach(item2 =>{
    const listItem2 = item2.querySelectorAll("li")

    for(let i =0 ;i<listItem2.length ; i++){
        if(listItem2[i].textContent=='Dan'){
            listItem2[i].style.display = 'none'
        }
    }
    
})
uls.forEach(item3 =>{
    const listItem3 = item3.querySelectorAll("li")

    for(let i =0 ;i<listItem3.length ; i++){
        if(listItem3[i].textContent=='Richard'){
            listItem3[i].style.border = '2px solid black'
        }
    }
    
})
document.body.style.fontSize = "30px"

if(container.style.background === "lightblue"){
    const users = Array.from(listItems).map( user=>user.textContent )
    if (users.length >= 2){
        console.log(`Bonjour ${users[0]} et ${users[1]}`);
        
    }
}



