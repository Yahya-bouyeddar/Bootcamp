var allBoldItems = []
const p = document.getElementsByTagName('p')[0]
const strong = document.querySelectorAll('strong')
// console.log(p);


function getBoldItems(){

    strong.forEach(element => {
         allBoldItems.push(element.textContent)
        
    });
    console.log(allBoldItems);

}
function highlight(){
    
    strong.forEach(element => {
        element.style.color = 'blue'
        element.style.cursor = 'pointer'
       
   });
}
function returnItemsToDefault(){
    strong.forEach(element => {
        element.style.color = 'black'
       element.style.cursor = 'pointer'
   });

}
p.addEventListener('mouseover',highlight)
p.addEventListener('mouseout',returnItemsToDefault)
