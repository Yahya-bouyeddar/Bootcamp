

// const navbar = document.getElementById('navbar')
const nav = document.getElementById('navbar')


(function(nameUser){
    let div =  document.createElement('div')
    let p = document.createElement('p')
    let img = document.createElement('img')
    p.textContent = nameUser
    div.appendChild(p)
    div.appendChild(img)
    
    nav.appendChild(div)

})("yahya");




