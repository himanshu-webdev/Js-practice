const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items")) : [];


function createCard(){
    createBox.style.display = "block";
}



function deleteCards(){
  localStorage.clear();
  flashcards.innerHTML = "";
  contentArray = [];
}  

contentArray.forEach(divMaker);

function divMaker(text, delThisIndex){
  const div = document.createElement("div");
  const h2_question = document.createElement("h2");
  const h2_answer = document.createElement("h2");
  const del = document.createElement('i');

  div.className = "flashcard";

  h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  h2_question.textContent = text.my_question;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
  h2_answer.textContent = text.my_answer;

    del.className = "fas fa-xmark";
    del.addEventListener("click", () => {
        contentArray.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(contentArray));
        window.location.reload();
    })

  div.appendChild(h2_question);
  div.appendChild(h2_answer);
  div.appendChild(del);

  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none"){
        h2_answer.style.display =  "block";
    }else {
        h2_answer.style.display = "none";
    }
  });

  flashcards.appendChild(div);
}


function saveFlashCard(){
    
    const flashcard_info = {
        'my_question' : question.value,
        'my_answer'   : answer.value
    }

    contentArray.push(flashcard_info);

    // Save the flashcard data to localStorage
    localStorage.setItem('items', JSON.stringify(contentArray));

    divMaker(contentArray[contentArray.length - 1]); 

    question.value = '';
    answer.value = '';   
}

function hideCreateBox(){
  createBox.style.display = "none";
}




