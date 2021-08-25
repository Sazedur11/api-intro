function dataBtn() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(JSON => console.log(JSON))
    // .then(JSON => console.log(JSON.title))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}
function displayUser(data) {
    console.log(data)
}

/*
fetch  দিয়ে অন্য ওয়েবসাইট এর ডাটা নিজের ওয়েবসাইট এ load করা যাই
*/