const tasks = [];
const btn = document.getElementById("btn");
const tache = document.getElementById("tache");
const taches = document.getElementsByClassName("listTasks")[0];
let taskIdCounter = 0


btn.addEventListener("click", function addTask() {
  console.log(tache.value);
  if (tache.value == "") {
    alert("champ vide");
    return
  }
  const newTask = {
    task_id: taskIdCounter++,
    text: tache.value,
    done: false
  };
  tasks.push(newTask);
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  taskDiv.setAttribute("data-task-id", newTask.task_id); 
  

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", doneTask);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add("deleteBtn");

    let p = document.createElement("p");
    p.textContent = newTask.text;
    p.classList.add("style");
   
    
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(p);
    taches.appendChild(taskDiv);
    

    deleteBtn.addEventListener("click", function () {
        deleteTask(newTask.task_id, taskDiv);  
      });

tache.value = ''
  

});
function doneTask(event) {
    let checkbox = event.target; 
    let taskDiv = checkbox.parentElement; 
    let taskId = parseInt(taskDiv.getAttribute("data-task-id")); 
  
   
    let task = tasks.find(t => t.task_id === taskId);
    if (task) {
      task.done = checkbox.checked; 
      let textElement = taskDiv.querySelector("p");
  
      if (task.done) {
        textElement.style.color = "red";
        textElement.style.textDecoration = "line-through"; // Barré
      } else {
        textElement.style.color = "black";
        textElement.style.textDecoration = "none"; // Normal
      }
    }
  }
  function deleteTask(taskId, taskDiv) {
    
    let index = tasks.findIndex(t => t.task_id === taskId);
    
    
    if (index !== -1) {
      tasks.splice(index, 1); 
      taskDiv.remove();      
    }
  }
