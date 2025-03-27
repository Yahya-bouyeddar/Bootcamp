const tasks = []
const btn = document.getElementById('btn')
const tache = document.getElementById('tache')
const taches = document.getElementsByClassName('listTasks')[0]
console.log(tache.value);


btn.addEventListener('click',function addTask(){
    console.log(tache.value);
   if(tache.value == ''){
    alert('champ vide')
    
   }
    tasks.push(tache.value)
      
        taches.innerHTML = ""

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add("deleteBtn");

   
    let p = document.createElement("p");
    p.textContent = tache.value;
    p.classList.add("style");
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task")








    
    taskDiv.appendChild(deleteBtn)
    taskDiv.appendChild(checkbox)
    taskDiv.appendChild(p)
    taches.appendChild(taskDiv)
    

})








