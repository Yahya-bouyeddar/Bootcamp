export  class toDolist{
    constructor(){
        this.todos =[]
    }
    add(task){
        const todo = {
            id: this.todos.length + 1,
            task,
            completed: false
          };
          console.log('completed');
          
        this.todos.push(todo)
    }
    markAsCompleted(id){
        this.todos.forEach(element=>{
            if(element.id == id){
                element.completed = true
            }
        })
    }
    list(){
        return this.todos.map(todo=>{
            return `${todo.task}`
        })
    }
}
