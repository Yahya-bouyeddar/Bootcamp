

function myMove(){
    const animate = document.getElementById('animate')
    const container = document.getElementById('container')
    let position = 0
    const move = setInterval(function(){
        
        animate.style.left = position + 'px'
        position++
        if(position>container.offsetWidth-animate.offsetWidth){
            clearInterval(move)
        }
    },1)
    

}