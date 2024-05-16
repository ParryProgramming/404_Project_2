let logoutBtn = document.querySelector('#logoutBtn');

const logout = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST', // or 'GET', 'PUT', etc. depending on your server-side implementation
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Logout successful, redirect the user to the home page or login page
            document.location.replace('/login');
        } else {
            // Handle error response from the server
            alert('Failed to logout. Please try again.');
        }
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.error('Error logging out:', error.message);
        alert('An error occurred while logging out. Please try again later.');
    }
};

logoutBtn.addEventListener('click', logout);