let addButton = document.getElementById("Add");
let TodoInput = document.getElementById("Todoinput")
let tasksContainer = document.getElementById("tasksContainer");
let error = document.getElementById("errorMessage");

addButton.addEventListener("click", function(){
    if (TodoInput.value.trim() === ""){
        error.textContent = "*Enter task to add "
        return;
    }
    error.textContent = ""
    let innerDiv = document.createElement("div") //Creating inner Div
    let leftGroupDiv = document.createElement("div")  //Creating div for icon
    let textValue = document.createElement("p");  //Creating P to put it in Div
    let circle = document.createElement("span");   //Creating span for circle
    let trashIcon =document.createElement("span"); //Creating span for trash

    
    circle.innerHTML = `<i class="fa-regular fa-circle"></i>`
    trashIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`
    textValue.textContent = TodoInput.value;

    circle.classList.add("check") 
    innerDiv.classList.add("inner_div")
    leftGroupDiv.classList.add("textDiv")
    textValue.classList.add("text")
    trashIcon.classList.add("trash")

    leftGroupDiv.style.display = "flex";
    leftGroupDiv.style.alignItems = "center"

    leftGroupDiv.appendChild(circle);
    leftGroupDiv.appendChild(textValue);

    tasksContainer.appendChild(innerDiv);
    innerDiv.appendChild(leftGroupDiv);
    
    // innerDiv.appendChild(trashDiv);
    // innerDiv.appendChild(textDiv);
    // trashDiv.appendChild(trashIcon);
    innerDiv.appendChild(trashIcon);
    
    TodoInput.value= ""

    leftGroupDiv.addEventListener("click", function(){
        if(!textValue.classList.contains("completed")){
            textValue.classList.add("completed");
            circle.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        }
        else{
            textValue.classList.remove("completed");
            circle.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        }
    })

})