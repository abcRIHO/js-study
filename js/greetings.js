const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const greeting = document.querySelector('#greeting');
const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

function onLoginSubmit(event) {
    const username = loginInput.value;

    event.preventDefault();

    localStorage.setItem(USERNAME_KEY, username);
    // form이 submit되면 input으로부터 username 받음
    paintGreetings(username)

    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(USERNAME_KEY);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
  }

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // localstorage로부터 username
    paintGreetings(savedUsername)
}
