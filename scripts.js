let addButton = document.getElementById("Add");
let TodoInput = document.getElementById("Todoinput")
let tasksContainer = document.getElementById("tasksContainer");
let error = document.getElementById("errorMessage");



addTask = function(){
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
    saveData();

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
    

}
addButton.onclick = addTask

TodoInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask()
    }
})

function saveData(){
    localStorage.setItem("task", tasksContainer.innerHTML)
}

document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("task");
    if (saved) tasksContainer.innerHTML = saved;
});

tasksContainer.addEventListener("click", function (event) {
    const trashClicked = event.target.closest(".trash");
    if (trashClicked) {
        const inner = trashClicked.closest(".inner_div");
        if (inner) {
            inner.remove();
            saveData();
        }
        return;
    }
    const leftGroup = event.target.closest(".textDiv");
    if (leftGroup) {
        const textValue = leftGroup.querySelector("p.text");
        const circle = leftGroup.querySelector(".check");
        if (!textValue) return;
        if (!textValue.classList.contains("completed")) {
            textValue.classList.add("completed");
            if (circle) circle.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        } else {
            textValue.classList.remove("completed");
            if (circle) circle.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        }
        saveData();
    }
});
