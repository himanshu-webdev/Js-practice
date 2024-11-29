const messageInput = document.getElementById('message-input');

messageInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        getMessage();
    }
})

function getMessage() {
    document.getElementById('output').innerHTML = messageInput.value;
    messageInput.value = "";
}