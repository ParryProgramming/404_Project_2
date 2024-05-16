let logoutBtn = document.getElementById('logoutBtn');

const logout = async () => {
    console.log('Running');
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

logoutBtn.addEventListener('click', logout);