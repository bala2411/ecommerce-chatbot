
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const resetBtn = document.getElementById('resetBtn');

sendBtn.addEventListener('click', sendMessage);
resetBtn.addEventListener('click', resetChat);

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  
  fetch('http://127.0.0.1:5000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })
  .then(res => res.json())
  .then(data => {
    appendMessage(data.response, 'bot');
  })
  .catch(err => console.error('Error:', err));

  userInput.value = '';
}

const sendButton = document.getElementById("send");
sendButton.addEventListener("click", () => {
  const userInput = document.getElementById("input").value;

  fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.reply);
    // Append chatbot reply to the UI
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

function appendMessage(message, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = [$,{new:data().toLocaleTimeString()}] ;$;{message};
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function resetChat() {
  chatbox.innerHTML = '';
}