document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_MESSAGE_LENGTH = 10;
    
    function validateName() {
        const value = nameInput.value.trim();
        if (!value) {
            alert('Please enter your name');
            return false;
        }
        return true;
    }
    
    function validateEmail() {
        const value = emailInput.value.trim();
        if (!value) {
            alert('Please enter your email address');
            return false;
        }
        if (!emailRegex.test(value)) {
            alert('Please enter a valid email address');
            return false;
        }
        return true;
    }
    
    function validateMessage() {
        const value = messageInput.value.trim();
        if (!value) {
            alert('Please enter your message');
            return false;
        }
        if (value.length < MIN_MESSAGE_LENGTH) {
            alert(`Message must be at least ${MIN_MESSAGE_LENGTH} characters (you have ${value.length})`);
            return false;
        }
        return true;
    }
    
    function validateForm() {
        return validateName() && validateEmail() && validateMessage();
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Thank you for contacting us! We will get back to you soon.');
            form.reset();
        }
    });
});