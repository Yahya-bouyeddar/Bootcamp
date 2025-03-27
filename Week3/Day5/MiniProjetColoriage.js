const content = document.getElementById("content");
let selector = "lightskyblue";
const color = document.querySelectorAll(".color");
let bool = false
const btn = document.getElementById('btn')
for (let i = 0; i < 1920; i++) {
  const div = document.createElement("div");
  div.classList.add("rightDiv");
  content.appendChild(div);
  btn.addEventListener('click',function(){
    div.style.background = 'white'
  })
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



