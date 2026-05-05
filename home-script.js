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