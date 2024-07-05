$(document).ready(function() {
    // Smooth scrolling
    $('a.nav-link, .btn').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 800);
        }
    });

    // Navbar color change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Parallax effect on home section
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        $('#home').css('background-position-y', -(scrollPosition * 0.5) + 'px');
    });

    // Typing effect for home section
    const typed = new Typed('#typed-text', {
        strings: ['Software Engineer', 'Electrical Engineering Student', 'Technology Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Project filter
    $('.filter-btn').on('click', function() {
        var category = $(this).attr('data-filter');
        if (category == 'all') {
            $('.project-item').show('1000');
        } else {
            $('.project-item').not('.' + category).hide('1000');
            $('.project-item').filter('.' + category).show('1000');
        }
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Lazy loading images
    const images = document.querySelectorAll('[data-src]');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }

    // Form validation and submission
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var errors = [];

        if (name.length < 2) {
            errors.push('Name must be at least 2 characters long');
        }

        if (!validateEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        if (message.length < 10) {
            errors.push('Message must be at least 10 characters long');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            this.reset();
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Interactive floating boxes
    $('.box').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.2) rotate(45deg)');
    }).on('mouseleave', function() {
        $(this).css('transform', '');
    });

    // Dynamic content loading for projects
    $('#load-more-projects').on('click', function() {
        $.ajax({
            url: 'more-projects.json', // You'll need to create this JSON file
            dataType: 'json',
            success: function(data) {
                data.projects.forEach(function(project) {
                    var projectHtml = `
                        <div class="col-md-6 mb-4 project-item ${project.category}">
                            <div class="card h-100">
                                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${project.title}</h5>
                                    <p class="card-text">${project.description}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    $('#projects-container').append(projectHtml);
                });
            },
            error: function() {
                alert('Error loading more projects');
            }
        });
    });

    // Animated counter for skills
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Animated skill bars
    $('.progress-bar').each(function() {
        $(this).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, 1000);
    });

    // Scroll reveal animation
    ScrollReveal().reveal('.reveal', { 
        delay: 200,
        distance: '50px',
        duration: 500,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 1,
        cleanup: false,
        container: window.document.documentElement,
        desktop: true,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.0,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
});
