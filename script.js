document.addEventListener("DOMContentLoaded", function () {
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

    if (!chatBox) {
        console.error("❌ ERROR: chat-box element not found in the HTML!");
        return;
    }

    let index = 0;

    function addMessage() {
        if (index < messages.length) {
            let msgData = messages[index];

            // Show typing animation
            let typingIndicator = document.createElement("div");
            typingIndicator.classList.add("typing", msgData.sender);
            typingIndicator.innerHTML = "<span></span><span></span><span></span>";
            chatBox.appendChild(typingIndicator);
            chatBox.scrollTop = chatBox.scrollHeight;

            setTimeout(() => {
                chatBox.removeChild(typingIndicator);

                // Create message bubble
                let messageDiv = document.createElement("div");
                messageDiv.classList.add("message", msgData.sender);
                messageDiv.innerText = msgData.text; // Fixing text display
                chatBox.appendChild(messageDiv);

                chatBox.scrollTop = chatBox.scrollHeight;
                index++;

                setTimeout(addMessage, msgData.delay);
            }, 1000); // Typing delay
        } else {
            setTimeout(() => {
                console.log("✅ Redirecting to personal_message.html...");
                window.location.href = "personal_message.html";
            }, 2000);
        }
    }

    console.log("✅ Chat animation started...");
    addMessage();
});
