// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate login (replace with actual API call)
        console.log('Login attempt:', { email, password });
        
        // Show success message
        alert('Login successful! Redirecting to dashboard...');
        
        // Redirect to home page (or dashboard)
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            organization: document.getElementById('organization').value,
            role: document.getElementById('role').value,
            country: document.getElementById('country').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };
        
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate password length
        if (formData.password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        
        // Simulate registration (replace with actual API call)
        console.log('Registration attempt:', formData);
        
        // Show success message
        alert('Registration successful! Please check your email to verify your account.');
        
        // Redirect to login page
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    });
}

// Social Login Handlers
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', (e) => {
        const provider = button.classList.contains('btn-google') ? 'Google' : 'LinkedIn';
        console.log(`${provider} login clicked`);
        alert(`${provider} authentication will be implemented here.`);
    });
});

// Password visibility toggle (optional enhancement)
function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.innerHTML = '👁️';
        toggleBtn.style.position = 'absolute';
        toggleBtn.style.right = '10px';
        toggleBtn.style.top = '50%';
        toggleBtn.style.transform = 'translateY(-50%)';
        toggleBtn.style.border = 'none';
        toggleBtn.style.background = 'none';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.fontSize = '1.2rem';
        
        toggleBtn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                toggleBtn.innerHTML = '🙈';
            } else {
                input.type = 'password';
                toggleBtn.innerHTML = '👁️';
            }
        });
        
        wrapper.appendChild(toggleBtn);
    });
}

// Initialize password toggle on page load
document.addEventListener('DOMContentLoaded', () => {
    // Uncomment to enable password visibility toggle
    // addPasswordToggle();
});

// Form validation styling
document.querySelectorAll('.auth-form input, .auth-form select').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#6366f1';
    });
});

// Console message
console.log('%cSCIENGA SUMMITS', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cAuthentication System', 'color: #8b5cf6; font-size: 12px;');
