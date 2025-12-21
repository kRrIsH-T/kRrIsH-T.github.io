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

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.querySelector('i').classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add/remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.querySelector('i').classList.toggle(iconTheme)
        
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
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__handle',{delay:700})
sr.reveal('.about_img')
sr.reveal('.about__data')
sr.reveal('.skills__data')
sr.reveal('.ecard')
sr.reveal('.blog')
})
