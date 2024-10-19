// Preloader removal script 
// When the window finishes loading, add the 'loaded' class to the body
window.addEventListener("load", function() {
    document.body.classList.add('loaded');
});

// JavaScript to handle scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.getElementById('site-stats');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add visible class when in viewport
    function checkVisibility() {
        if (isInViewport(statsSection)) {
            statsSection.classList.add('visible'); // Add class to trigger animation
            window.removeEventListener('scroll', checkVisibility); // Remove listener after visibility is triggered
        }
    }

    window.addEventListener('scroll', checkVisibility); // Add scroll event listener
});

document.addEventListener("DOMContentLoaded", function() {
    // Vertical Scrolling Slideshow with Fading Effect
    const listBoxes = document.querySelectorAll('.list-box'); // Select all list items
    let currentIndex = 0;

    // Function to display the next list item
    function showNextItem() {
        // Remove 'active' class from all list boxes
        listBoxes.forEach((box) => box.classList.remove('active'));
        
        // Add 'active' class to the current list item
        listBoxes[currentIndex].classList.add('active');
        
        // Increment index, reset to 0 when we reach the last item
        currentIndex = (currentIndex + 1) % listBoxes.length;
    }

    // Show the first item on load
    showNextItem();
    
    // Set interval to switch to the next item every 3 seconds
    setInterval(showNextItem, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    // Form Validation Variables
    let nameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let messageValid = false;

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // Utility function to toggle submit button based on field validation status
    function toggleSubmitButton() {
        if (nameValid && emailValid && phoneValid && messageValid) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('submit-disabled');
            submitBtn.removeAttribute('title'); // Remove the error message tooltip
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('submit-disabled');
            submitBtn.setAttribute('title', 'Form has missing or incorrect fields.'); // Set title to display the error message on hover
        }
    }

    // Validation Handlers
    fullName.addEventListener('input', function() {
        const nameRegex = /^[A-Za-z\s]+$/;
        nameValid = nameRegex.test(fullName.value);
        document.getElementById('nameError').style.display = nameValid ? 'none' : 'block';
        document.getElementById('nameSuccess').style.display = nameValid ? 'block' : 'none';
        toggleSubmitButton();
    });

    email.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailValid = emailRegex.test(email.value);
        document.getElementById('emailError').style.display = emailValid ? 'none' : 'block';
        document.getElementById('emailSuccess').style.display = emailValid ? 'block' : 'none';
        toggleSubmitButton();
    });

    phone.addEventListener('input', function() {
        const phoneRegex = /^\+[1-9][0-9]*$/; // Ensure phone starts with '+' and is followed by digits
        phoneValid = phoneRegex.test(phone.value);
        document.getElementById('phoneError').style.display = phoneValid ? 'none' : 'block';
        document.getElementById('phoneSuccess').style.display = phoneValid ? 'block' : 'none';
        toggleSubmitButton();
    });

    message.addEventListener('input', function() {
        messageValid = message.value.trim() !== '';
        document.getElementById('messageError').style.display = messageValid ? 'none' : 'block';
        document.getElementById('messageSuccess').style.display = messageValid ? 'block' : 'none';
        toggleSubmitButton();
    });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate successful form submission with AJAX (without reloading the page)
        successMessage.style.display = 'block';

        // Disable the submit button to avoid double submission
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitted';
    });
});
