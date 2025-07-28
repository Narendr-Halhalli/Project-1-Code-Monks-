// script.js

document.addEventListener('DOMContentLoaded', () => {
  const orb = document.getElementById('ai-orb');
  const chatbox = document.getElementById('ai-chatbox');

  if (orb && chatbox) {
    orb.addEventListener('click', () => {
      chatbox.classList.toggle('hidden');

      // Optional: play greeting sound
      const audio = new Audio('voice/ai-voice.mp3');
      audio.play();
    });
  }

  // Optional: personalized greeting
  const userName = localStorage.getItem('userName') || 'Guest';
  const namePlaceholder = document.getElementById('username');
  if (namePlaceholder) namePlaceholder.textContent = userName;
});
