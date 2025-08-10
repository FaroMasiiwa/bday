/**
 * Script handles form submission
 */

const birthdayForm = document.getElementById('birthdayForm');

birthdayForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const dob = document.getElementById('dob').value;

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, dob })
    });

    const data = await res.json();

    if (res.ok) {
      alert('User saved successfully!');
      this.reset();
    } else {
      alert(data.message || 'Error saving user.');
    }
  } catch (err) {
    console.error(err);
    alert('An error occurred, please try again.');
  }
});
