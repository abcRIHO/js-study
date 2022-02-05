const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // input의 현재 value를 newTodo라는 변수에 복사

    todoInput.value = '';
    paintTodo(newTodo);
    // 입력값을 paintTodo에 넣어서 호출
} 

function paintTodo(newTodo) {
    // handleTodoSubmit이 사용하게 될 함수
    // Todo를 그려주는 함수
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = '❌';
    span.innerText = newTodo;

    button.addEventListener('click', deleteTodo);
    
    li.appendChild(span); // li가 span이라는 자식 요소를 가지게 됨
    li.appendChild(button);
    
    todoList.appendChild(li); 
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}


todoForm.addEventListener('submit', handleTodoSubmit);

// 지금 문제: 짝수번째 submit을 하면 자꾸 delete 이벤트가 발생함