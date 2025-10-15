// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// ===================================
// Smooth Scroll Functions
// ===================================
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// Multi-Step Form Logic
// ===================================
let currentStep = 1;
const totalSteps = 2;

function showStep(stepNumber) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((step, index) => {
        step.classList.remove('active');
        if (index === stepNumber - 1) {
            step.classList.add('active');
        }
    });
}

function nextStep() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // Validate current step
    let isValid = true;
    
    if (currentStep === 1) {
        if (!nameInput.value.trim()) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        } else {
            nameInput.classList.remove('is-invalid');
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
        }
    }
    
    if (isValid && currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===================================
// Form Submission
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const messageInput = document.getElementById('message');
        
        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('is-invalid');
            return;
        } else {
            messageInput.classList.remove('is-invalid');
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            currentStep = 1;
            showStep(1);
        }, 3000);
    });
});

function showSuccessMessage() {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));
    document.getElementById('successMessage').classList.add('active');
}

// ===================================
// Navbar Scroll Effect (if added later)
// ===================================
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Add any scroll-based effects here
    // For example, changing navbar background on scroll
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroImage = document.querySelector('.hero-image-container');
    
    if (heroImage && scrollPosition < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});

// ===================================
// Input Validation on Blur
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (!this.value.trim() || !isValidEmail(this.value)) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    }
});

// ===================================
// Smooth Reveal on Scroll
// ===================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.benefit-card, .process-step, .result-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ===================================
// Prevent Form Resubmission on Refresh
// ===================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===================================
// Add Hover Effect to Cards
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.benefit-card, .result-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ===================================
// Console Message
// ===================================
console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #0077B6;');
console.log('%cGracias por visitar Coslio Soluciones', 'font-size: 14px; color: #023047;');
console.log('%c¿Necesitás ayuda con tu proyecto? Contactanos en info@cosliosoluciones.com', 'font-size: 12px; color: #00B4D8;');

