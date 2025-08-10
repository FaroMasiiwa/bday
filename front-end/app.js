const form = document.getElementById('birthdayForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const dob = document.getElementById('dob').value;

  try {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, dob }),
    });

    const data = await response.json();

    if (response.ok) {
      messageDiv.style.color = 'green';
      messageDiv.textContent = data.message;
      form.reset();
    } else {
      messageDiv.style.color = 'red';
      messageDiv.textContent = data.message || 'Error occurred';
    }
  } catch (error) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Network error';
  }
});
