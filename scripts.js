/* General styles */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #000;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.section {
    padding: 40px 0;
}

.navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s, color 0.3s;
}

.navbar a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
}

.navbar a:hover {
    color: #f0f0f0;
}

/* Dark mode styles */
body.dark-mode {
    background-color: #333;
    color: #fff;
}

body.dark-mode .navbar {
    background-color: #111;
}

body.dark-mode .navbar a {
    color: #fff;
}

body.dark-mode .navbar a:hover {
    color: #ccc;
}

/* Button styles */
#dark-mode-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    z-index: 1100;
    transition: background-color 0.3s, color 0.3s;
}

#dark-mode-toggle:hover {
    background-color: #555;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Home section styles */
#home {
    height: 100vh;
    background-image: url('../images/background.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

#home .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 1;
}

#home h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
}

#home p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* Typing effect */
#typed-text {
    font-size: 2rem;
    font-weight: 600;
}

/* Project filter */
.project-filter {
    margin-bottom: 30px;
}

.project-filter .btn {
    margin-right: 10px;
}

/* Project items */
.project-item {
    margin-bottom: 30px;
}

.project-item .card {
    transition: transform 0.3s;
}

.project-item:hover .card {
    transform: translateY(-5px);
}

.project-item .card-img-top {
    height: 200px;
    object-fit: cover;
}

/* Form styles */
.form-control {
    margin-bottom: 20px;
}

.form-control.error {
    border-color: #dc3545;
}

.form-control.error:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

/* Floating boxes */
.box {
    transition: transform 0.3s;
}

.box:hover {
    transform: scale(1.1) rotate(45deg);
}

/* Reveal animation */
.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s, transform 0.6s;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Skill progress bars */
.skill-progress-bar {
    height: 10px;
    background-color: #007bff;
    margin-bottom: 10px;
}

/* Back to top button */
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    display: none;
}

.back-to-top:hover {
    background-color: #0056b3;
}

/* Footer */
.footer {
    background-color: #f8f9fa;
    padding: 30px 0;
    text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .navbar {
        padding: 8px 0;
    }
}

