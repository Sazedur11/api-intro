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
        .then(data => postData(data))
}
function displayUser(data) {
    const ul = document.getElementById('users');
    console.log(data)
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, City: ${user.address.city}`;
        ul.appendChild(li);
    }
}

/*
fetch  দিয়ে অন্য ওয়েবসাইট এর ডাটা নিজের ওয়েবসাইট এ load করা যাই
*/


function postData(data) {
    const ul = document.getElementById('users');
    console.log(data)
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.title;
        ul.appendChild(li)
    }
}














