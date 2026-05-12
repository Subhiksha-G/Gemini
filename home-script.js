function handleContact(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const name = document.getElementById("name").value;
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    console.log("Form submitted by", name);

    form.style.display = "none";
    feedback.style.display = "block";
    feedback.innerHTML = `Thank You, ${name}! Your message has been "sent" (simulated).`;
}

const textElement = document.getElementById("typewriter");

const phrases = [
    "Front End Developer",
    "UI Designer",
    "Web Enthusiast",
    "Problem Solver"
];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
    if (characterIndex < phrases[phraseIndex].length) {
        textElement.innerHTML += phrases[phraseIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(type, 100);  //Speed of typing
    } else {
        setTimeout(erase, 100);
    }
}

function erase() {
    if (characterIndex > 0) {
        textElement.innerHTML = phrases[phraseIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

// Start the animation when the page loads
window.addEventListener("DOMContentLoaded", type);

// Technical Skills logic
const observer = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));