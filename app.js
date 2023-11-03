// This script will be linked to the front-end and will handle fetching a new name from the server
function fetchRandomName() {
    fetch('/name')
        .then(response => response.text())
        .then(name => {
            document.querySelector('.name').textContent = name;
        })
        .catch(error => console.error('Error:', error));
}

// Call the function on page load
fetchRandomName();
