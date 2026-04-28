function showGreeting() {
    alert("Hello! You are viewing Subhiksha's professional profile and my favourite quote is \"Think Bigger and Gain Bigger\"")
}

function toggleTheme() {
    // 1. Grab the body element
    var element = document.getElementById("myBody");
    var btn = document.getElementById("theme-btn");

    // 2. Toggle a CSS class or change style directly
    /*
    if(element.style.backgroundColor === "white") {
        element.style.backgroundColor = "#121212";
        element.style.color = "white";
        btn.innerHTML = "Switch to Light";
    }else {
        element.style.backgroundColor = "white";
        element.style.color = "balck";
        btn.innerHTML = "Switch to Dark";
    }
        */
    // 3. Toggle a class on the body (Industry way)
    element.classList.toggle("light-mode"); //Toggle a class called 'light-mode'
    //Change button text based on the class
    if(element.classList.contains("light-mode")) {
        btn.innerHTML = "Switch to Dark";
    }else {
        btn.innerHTML = "Switch to Light";
    }
}

/*
// 4. Created a Data Array
const teamData = [
    { name: "Subhiksha G", role: "Lead Developer", img: "Circle.jpg" },
    { name: "Subhiksha G", role: "Lead Developer", img: "Circle.jpg" },
    { name: "Subhiksha G", role: "Lead Developer", img: "Circle.jpg" }
];

function displayCards() {
    const container = document.getElementById("card-container");
    //Clear the container first
    container.innerHTML = "";
    //Loop through the data and create HTML for each
    teamData.forEach(teamData => {
        container.innerHTML += `
            <div class="card">
                <img src="${teamData.img}" class="profile-img">
                <h2>${teamData.name}</h2>
                <p>${teamData.role}</p>
                <button>Profile</button>
            </div>
        `;
    });
}

//call the function when the page loads
displayCards();
*/

/*
// 5. New function to get real data from the internet
async function fetchTeamData() {
    try {
        // 1. Ask the API for 10 users
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json(); // Convert the "raw" data to a JS object
        const realUsers = data.results; // This is our new array

        // 2. Find our container
        const container = document.getElementById("card-container");
        container.innerHTML = "";

        // 3. Loop through the real data
        realUsers.forEach(user => {
            container.innerHTML += `
                <div class= "card">
                    <img src="${user.picture.large}" class="profile-img">
                    <h2>${user.name.first} ${user.name.last}</h2>
                    <p>${user.location.city}, ${user.location.country}</p>
                    <button onclick="showGreeting()">Contact</button>
                </div>
            `;
        });
    } catch (error) {
        console.log("Oops, something went wrong:",error);
    }
}

// Call the new async function
fetchTeamData();
*/


// 6. Search & Filtering (User Interaction)
let allUsers = [];  // Global variable to store our data
async function fetchTeamData() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        allUsers = data.results;  //Save data to our global variable
        displayUsers(allUsers);  //Call a separate function to show them
    } catch (error) {
        console.log("Oops, something went wrong:", error);
    }
}

// Separate function just for displaying
function displayUsers(users) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";

    users.forEach(user => {
        container.innerHTML += `
            <div class="card">
                <img src="${user.picture.large}" class="profile-img">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.location.city}, ${user.location.country}</p>
                <button onclick="showGreeting()">Contact</button>
            </div> 
        `;
    });
}

// The New Search Function
function searchUsers() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();

    // Filter the global allUsers array
    const filteredUsers = allUsers.filter(user => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        return fullName.includes(searchTerm);
    });

    // Display only the matching users
    displayUsers(filteredUsers);
}

fetchTeamData();