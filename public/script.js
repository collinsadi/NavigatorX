let darkMode = false;

function toggleDarkMode() {
    const body = document.body;
    const chatContainer = document.querySelector('.chat-container');
    const messages = document.querySelectorAll('.message');
    const input = document.querySelector('.chat-input');
    const button = document.querySelector('button');

    darkMode = !darkMode;

    if (darkMode) {
        body.style.backgroundColor = '#111';
        chatContainer.style.backgroundColor = '#222';
        input.style.backgroundColor = '#444';
        button.style.backgroundColor = '#777';
        button.style.color = '#fff';

        messages.forEach(message => {
            message.style.backgroundColor = '#333';
            message.style.color = '#fff';
        });
    } else {
        body.style.backgroundColor = '#ddd';
        chatContainer.style.backgroundColor = '#ccc';
        input.style.backgroundColor = '#ccc';
        button.style.backgroundColor = '#333';
        button.style.color = '#fff';

        messages.forEach(message => {
            message.style.backgroundColor = message.classList.contains('sender') ? '#4285f4' : '#ccc';
            message.style.color = message.classList.contains('sender') ? '#fff' : '#333';
        });
    }
}

async function sendMessage() {
    const input = document.getElementById('messageInput').value;
    if (input.trim() !== '') {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sender';
        messageDiv.textContent = input;
        messagesContainer.appendChild(messageDiv);
        document.getElementById('messageInput').value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        const aiResponse = document.createElement('div');
            aiResponse.className = 'message receiver';
            aiResponse.textContent = 'Generating Response ....';
            messagesContainer.appendChild(aiResponse);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        

        const response = await fetch("/message/new",{
            headers: {"Content-Type":"application/json"},
            method:"POST",
            body: JSON.stringify({message:input.trim()})
        });

        const data = await response.json();
        console.log(data)
        aiResponse.textContent = data.response;
        
   
    }
}


window.addEventListener("keyup", async (e)=>{

    if(e.key === "Enter"){
        await sendMessage();
    }

})