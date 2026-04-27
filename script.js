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
                <img src="${teamData.img}" class="profile-img>"
                <h2>${teamData.name}</h2>
                <p>${teamData.role}</p>
                <button>Profile</button>
            </div>
        `;
    });
}

//call the function when the page loads
displayCards();