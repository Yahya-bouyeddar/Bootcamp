// 1)
const H1 = document.querySelector('h1')
console.log(H1.textContent);
// 2)
const par = document.querySelectorAll('p')
par[par.length-1].remove()
console.log(par);
// 3)
const H2 = document.querySelector('h2')
const H3 = document.querySelector('h3')
const btn = document.querySelector('button')
const allP = document.querySelectorAll('p')

H2.addEventListener('click',function(){
    H2.style.color = 'red'

})
// 4)
H3.addEventListener('click',function(){
    H3.style.display = 'none'
})
// 5)
btn.addEventListener('click',function(){
  allP.forEach(item => {
    item.style.fontSize = '20px'
  })
//   6)
})
H1.addEventListener('mouseover',function(){
    randomSize = Math.floor(Math.random()*101) 
    H1.style.fontSize = randomSize + 'px'
})
// 7)
allP[1].addEventListener('mouseover',function(){
    allP[1].style.display = 'none'
})


