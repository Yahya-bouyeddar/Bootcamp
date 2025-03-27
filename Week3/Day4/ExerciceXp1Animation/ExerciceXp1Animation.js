// Part I
setTimeout(function(){
    alert('hello world')
},2000)
// Part II

const container = document.getElementById('container')
c
setTimeout(function(){
    const p1 = document.createElement('p')
    p1.textContent = 'hello world '
    container.appendChild(p1)
},2000)

// parti 3 

const interValid =  setInterval(function(){
    const p2 = document.createElement('p');
    p2.textContent = 'hello world ';
    container.appendChild(p2);
    if(container.getElementsByTagName('p').length >= 5){
        clearInterval(interValid)
    }
},2000)

const clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click',function(){
    clearInterval(interValid)
})


