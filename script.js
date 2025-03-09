const messages = [
    { text: "Thik hai byeeee", sender: "sent", delay: 1000 },
    { text: "Suno 😐\nBss bohot hua", sender: "received", delay: 2000 },
    { text: "I", sender: "received", delay: 2000 },
    { text: "Am cute", sender: "received", delay: 1500 },
    { text: "I", sender: "sent", delay: 1500 },
    { text: "Aage 😅😂", sender: "sent", delay: 1500 },
    { text: "Am cute 😂😂😂😂😂😂", sender: "sent", delay: 1500 },
    { text: "Aage 😂\n😂", sender: "received", delay: 1500 },
    { text: "I like you 😆", sender: "received", delay: 1500 },
    { text: "I like you 😆", sender: "sent", delay: 1500 },
    { text: "Me too", sender: "sent", delay: 1500 },
    { text: "Byee", sender: "sent", delay: 1500 },
    { text: "😐", sender: "received", delay: 1500 },
    { text: "Pls jaane do", sender: "sent", delay: 1500 },
];

const chatBox = document.getElementById("chat-box");
let index = 0;

function addMessage() {
    if (index < messages.length) {
        let msgData = messages[index];

        // Typing effect
        let typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing", msgData.sender);
        typingIndicator.innerHTML = "<span></span><span></span><span></span>";
        chatBox.appendChild(typingIndicator);

        setTimeout(() => {
            chatBox.removeChild(typingIndicator);
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("message", msgData.sender);
            messageDiv.textContent = msgData.text;
            chatBox.appendChild(messageDiv);
            messageDiv.style.display = "block";
            chatBox.scrollTop = chatBox.scrollHeight;
            index++;
            addMessage();
        }, msgData.delay);
    } else {
        setTimeout(() => {
            window.location.href = "personal_message.html"; // Transition to next page
        }, 2000);
    }
}

// Start chat animation on load
window.onload = () => {
    document.getElementById("bg-music").play();
    addMessage();
};
