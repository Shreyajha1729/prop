const messages = [
    { text: "Suno 😐\nBss bohot hua", sender: "received", delay: 2000 },
    { text: "I", sender: "received", delay: 2000 },
    { text: "Am cute", sender: "received", delay: 1500 },
    { text: "Aage 😅", sender: "sent", delay: 1500 },
    { text: "😂😂😂😂😂😂", sender: "sent", delay: 1500 },
    { text: "😅", sender: "received", delay: 1500 },
    { text: "I like you 😅", sender: "received", delay: 1500 },
    { text: "Me too", sender: "sent", delay: 1500 },
    { text: "Byee", sender: "sent", delay: 1500 },
    { text: "😐", sender: "received", delay: 1500 },
];

const chatBox = document.getElementById("chat-box");
let index = 0;

function addMessage() {
    if (index < messages.length) {
        let msgData = messages[index];

        // Typing effect indicator
        let typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing", msgData.sender);
        typingIndicator.innerHTML = "<span></span><span></span><span></span>";
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll

        setTimeout(() => {
            // Remove typing effect
            chatBox.removeChild(typingIndicator);

            // Create message bubble
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("message", msgData.sender);
            messageDiv.innerText = msgData.text; // Ensures proper formatting
            chatBox.appendChild(messageDiv);

            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
            index++;

            setTimeout(addMessage, msgData.delay);
        }, 1000); // 1-second delay for typing effect
    } else {
        setTimeout(() => {
            console.log("Redirecting to personal_message.html...");
            window.location.href = "personal_message.html";
        }, 2000);
    }
}

// Auto-start on page load
window.onload = () => {
    console.log("Chat animation started...");
    addMessage();
};
