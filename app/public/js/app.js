document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: e.target[0].value,
      password: e.target[1].value
    })
  });
  if (res.ok) window.location.href = '/';
});