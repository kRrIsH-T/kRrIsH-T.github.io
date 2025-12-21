// ########## Change background header #############
console.log("hehe")
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


document.addEventListener('DOMContentLoaded', (event) => {
    const heartButton = document.getElementById('heart-button');
    const likeCounter = document.getElementById('like-counter');
    heartButton.addEventListener('click', function() {
        if (this.classList.contains('bx-heart')) {
            this.classList.remove('bx-heart');
            this.classList.add('bxs-heart', 'liked');
            likeCounter.textContent = '1';
        } else {
            this.classList.remove('bxs-heart', 'liked');
            this.classList.add('bx-heart' );
            likeCounter.textContent = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const heartButton = document.getElementById('heart-button2');
    const likeCounter = document.getElementById('like-counter2');
    heartButton.addEventListener('click', function() {
        if (this.classList.contains('bx-heart')) {
            this.classList.remove('bx-heart');
            this.classList.add('bxs-heart', 'liked');
            likeCounter.textContent = '1';
        } else {
            this.classList.remove('bxs-heart','liked');
            this.classList.add('bx-heart');
            likeCounter.textContent = '0';
        }
    });
});

function submitComment() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    if (name && comment) {
        var newComment = {
            name: name,
            comment: comment
        };

        var existingComments = JSON.parse(localStorage.getItem('comments')) || [];

        existingComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(existingComments));
        displayComments();

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter both name and comment.');
    }
}

function scrollActive() {
    const scrollDown = window.scrollY;

    // Iterate over each section
    document.querySelectorAll('section[id]').forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; 
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}


document.querySelectorAll('.nav__list a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 57, 
                behavior: 'smooth',
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const contactLink = document.getElementById('contact-link');
    const activeLink = document.querySelector('.active');
    contactLink.addEventListener('click', function() {
        activeLink.classList.remove('active');
        this.classList.add('active');
    });
});


window.addEventListener('scroll', scrollActive);

// #################### light dark theme ##################

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Default to dark theme if no preference is saved
    const selectedTheme = localStorage.getItem('selected-theme') || 'dark'
    const selectedIcon = localStorage.getItem('selected-icon') || 'bx bx-sun'

    // Apply the theme on load
    if (selectedTheme === 'dark') {
        document.body.classList.add(darkTheme)
        themeButton.querySelector('i').classList.add(iconTheme)
        themeButton.querySelector('i').classList.remove('bx-moon')
    } else {
        document.body.classList.remove(darkTheme)
        themeButton.querySelector('i').classList.remove(iconTheme)
        themeButton.querySelector('i').classList.add('bx-moon')
    }

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon'

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add/remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.querySelector('i').classList.toggle(iconTheme)
        themeButton.querySelector('i').classList.toggle('bx-moon')
        
        // Add animation class
        themeButton.classList.add('rotate')
        setTimeout(() => {
            themeButton.classList.remove('rotate')
        }, 500)

        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: false
        })

        sr.reveal('.hero__text-wrapper', { origin: 'left' })
        sr.reveal('.hero__image-wrapper', { origin: 'right', delay: 400 })
        sr.reveal('.section__header', { delay: 200 })
        sr.reveal('.experience__item', { interval: 200 })
        sr.reveal('.gallery__item', { interval: 150 })
        sr.reveal('.footer__content')
    } else {
        console.error('ScrollReveal is not defined. Check if scrollreveal.js is loaded correctly.')
    }
})
