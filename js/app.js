const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //stop default behavior
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add("hidden");
    console.log(username);
    // greeting.innerText = "Hello " + username;
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`; //option + 원화 하면 백틱
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
   
}



const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(savedUsername);

}



























