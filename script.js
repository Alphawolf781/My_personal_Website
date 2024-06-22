// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);
// script.js
document.addEventListener('DOMContentLoaded',(event) => {
    console.log('DOM fully loaded and passed')
})
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
console.log('Form submitted')

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

//     // Construct the email body (this is a basic example)
//     const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

//     // For demonstration purposes, log the data to console
//     console.log(body);

//     // Optionally, reset the form after submission
//     contactForm.reset();
// });
if (name === '' || email === '' || message === ''){
    alert('All fields are required.');
    return;
}

const responsiveMessage = document.getElementById('responsiveMessage');
responsiveMessage.textContent = 'Thank you' + name +'. Your message has been sent!';
});