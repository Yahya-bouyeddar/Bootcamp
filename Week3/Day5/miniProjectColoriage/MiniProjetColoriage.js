const content = document.getElementById("content");
let selector = "lightskylue";
const color = document.querySelectorAll(".color");
let bool = false
const btn = document.getElementById('btn')
for (let i = 0; i < 1920; i++) {
  const div = document.createElement("div");
  div.classList.add("rightDiv");
  content.appendChild(div);

  div.addEventListener('mouseover',function(){
    if(bool){
      div.style.background = selectedColor
    }
    
    
  })
  div.addEventListener('mousedown',function(){
    bool = true
  })
  div.addEventListener('mouseup',function(){
    bool=false
  })
  };


color.forEach((item) => {
  item.addEventListener('click' , function () {
    selectedColor = window.getComputedStyle(item).background
  })})

  btn.addEventListener('click',function(){
    const divs = document.querySelectorAll('.rightDiv');  
    divs.forEach((div) => {
      div.style.background = 'white';  
    });
    selectedColor = 'white'
    
  })

