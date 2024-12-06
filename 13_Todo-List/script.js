const input  = document.getElementById("input");
const toDoItems = document.getElementsByClassName("to-do-items")[0];
const trash = document.getElementById("trash");

input.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
       addItem();
    }
})


function addItem(){
   const divParent =  document.createElement("div");
   const divChild =  document.createElement("div");
   const checkIcon = document.createElement("i");
   const trashIcon = document.createElement("i");

   divParent.className = "item";
   divParent.innerHTML = "<div>"+ input.value +"</div>"

   checkIcon.className = "fas fa-check-square";
   checkIcon.style.color = "lightgrey";
   checkIcon.addEventListener("click", function(){
    checkIcon.style.color = "limegreen"
   })

   divChild.appendChild(checkIcon);

   trashIcon.className = "fas fa-trash";
   trashIcon.style.color = "lightgrey";
   trashIcon.addEventListener("click", function(){
    divParent.remove();
   })

   divChild.appendChild(trashIcon);

   divParent.appendChild(divChild);

   toDoItems.appendChild(divParent);

    input.value = "";
}