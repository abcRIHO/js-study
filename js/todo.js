const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // input의 현재 value를 newTodo라는 변수에 복사

    todoInput.value = '';
    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    // 입력값을 paintTodo에 넣어서 호출
    saveTodos();
} 

function paintTodo(newTodo) {
    // handleTodoSubmit이 사용하게 될 함수
    // Todo를 그려주는 함수
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = '❌';

    li.id = newTodo.id;
    span.innerText = newTodo.text;

    button.addEventListener('click', deleteTodo);
    
    li.appendChild(span); // li가 span이라는 자식 요소를 가지게 됨
    li.appendChild(button);
    todoList.appendChild(li); 
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}


todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    // parsedTodos array 내부의 item을 가지고 item을 나타내길 원함
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo); 
    // paintTodo는 텍스트를 받고, JS가 그 텍스트를 paintTodo에 전달
}