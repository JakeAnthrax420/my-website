let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

ScrollReveal({
    reset: true,
    distance: '69px',
    duration: 2000,
    delay: 169,
});

ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin : 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin : 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin : 'right'});

//---------------------------TYPED JS---------------------------//
// var keystrokeSound = new Audio('');

// function playSound () {
//     if (typeof keystrokeSound.loop == 'boolean')
//     {
//         keystrokeSound.loop = true;
//     }
//     else
//     {
//         keystrokeSound.addEventListener('ended', function() {
//             this.currentTime = 0;
//             this.play();
//         }, false);
//     }
//     keystrokeSound.play();
// }

// function stopSound () {
//     keystrokeSound.pause();
// }


const typed = new Typed('.typing', {
    strings: ['Web Developer', 'Freelancer', 'Designer', 'Programmer', 'Online Seller',  ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    // Audio: true,
    
    // preStringTyped : function(){
    //     playSound();
    // },
    // onStringTyped : function(){
    //     stopSound();
    // }    
});