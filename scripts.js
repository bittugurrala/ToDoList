let addButton = document.getElementById("Add");
let TodoInput = document.getElementById("Todoinput")
let tasksContainer = document.getElementById("tasksContainer");
let error = document.getElementById("errorMessage");

addButton.addEventListener("click", function(){
    if (TodoInput.value.trim() === ""){
        error.textContent = "*Enter task to add "
        return;
    }
    else{
        error.textContent = ""
    }
    let innerDiv = document.createElement("div") //Creating inner Div
    let textValue = document.createElement("p");  //Creating P to put it in Div
    let circle = document.createElement("span");   //Creating P for circle
    textValue.textContent = TodoInput.value;
    circle.innerHTML = `<i class="fa-regular fa-circle"></i>`
    circle.classList.add("check")
    innerDiv.classList.add("inner_div")
    tasksContainer.appendChild(innerDiv);
    innerDiv.appendChild(circle);
    innerDiv.appendChild(textValue);
    TodoInput.value= ""

})