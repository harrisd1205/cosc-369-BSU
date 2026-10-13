function validateRegistration(username, email, password) {
  const name = username.trim();
  const address = email.trim();
  if (name.length < 3 || name.length > 30) return 'Username must be 3–30 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) return 'Enter a valid email address.';
  if (password.length < 8) return 'Password must be at least 8 characters.';
  return null;
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('signup-form');
  const message = document.getElementById('message');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = validateRegistration(form.username.value, form.email.value, form.password.value);
    message.className = error ? 'error' : 'success';
    message.textContent = error || 'Form validated! Account creation will be available when the secure backend is added.';
  });
}

if (typeof module !== 'undefined') module.exports = { validateRegistration };
