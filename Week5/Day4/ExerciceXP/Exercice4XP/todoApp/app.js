import { toDolist } from "./todo.js";
const myList = new toDolist()
myList.add("Apprendre Node.js");
myList.add("Faire les courses");
myList.markAsCompleted(1);


console.log(myList.list());
