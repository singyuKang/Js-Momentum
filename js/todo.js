const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];


function saveToDos(){
    // localStorage.setItem("todos",toDos);
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // console.log(li);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
  

  function paintToDo(newTodo) {
    // console.log(newTodo)
    const li = document.createElement("li");
    li.id = newTodo.id;
    // console.log(li.id);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.className = "btnElement";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos)
    toDos = parsedToDos;
    // console.log(toDos)
    // paintToDo("A") 이런식으로 넘긴다
    parsedToDos.forEach(paintToDo);  
}
// console.log(toDos);

