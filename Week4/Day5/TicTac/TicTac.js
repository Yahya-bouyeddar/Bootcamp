const circleX = document.querySelectorAll(".circle")[1];
const circle0 = document.querySelectorAll(".circle")[0];
const choice = document.getElementById("choice");
const game = document.getElementById("game");
const case1 = document.getElementById("case1");
const case2 = document.getElementById("case2");
const case3 = document.getElementById("case3");
const case4 = document.getElementById("case4");
const case5 = document.getElementById("case5");
const case6 = document.getElementById("case6");
const case7 = document.getElementById("case7");
const case8 = document.getElementById("case8");
const case9 = document.getElementById("case9");
const result = document.getElementById('result')
let array = [case1, case2, case3, case4, case5, case6, case7, case8, case9];

circleX.addEventListener("click", function () {
    if((case1.textContent=='x'&& case2.textContent=='x'&& case3.textContent=='x') || (case3.textContent=='x' && case6.textContent=='x'&& case9.textContent=='x')||(case9.textContent=='x'&& case8.textContent=='x'&& case7.textContent=='x')||(case7.textContent=='x'&& case4.textContent=='x'&& case1.textContent=='x')||
       ( case1.textContent=='x'&& case5.textContent=='x'&& case9.textContent=='x')|| (case3.textContent=='x'&& case5.textContent=='x'&& case7.textContent=='x')){
        console.log('vous avez gagné'); 
          
      }else{
        game.style.display = "block";

        choice.style.display = "none";
      
        array.forEach((element) => {
      
          if (element.textContent !== "") return;
          element.addEventListener("click", function () {
            element.textContent = "x";
            const index = array.indexOf(element);
            array.splice(index, 1);
      
            if (array.length > 0) {
              const ChoixRandom = Math.floor(Math.random() * array.length); 
              const caseRandom = array[ChoixRandom]; 
              caseRandom.textContent = "O";
              array.splice(ChoixRandom, 1);    
            }
          })
        })
      }
 
})
circle0.addEventListener("click", function () {
  game.style.display = "block";

  choice.style.display = "none";
});
