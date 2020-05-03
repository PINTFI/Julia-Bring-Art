const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navi-links');
    const navLinks = document.querySelectorAll('.navi-links li');

    burger.onclick = () => {
        nav.classList.toggle('navi-active');
    }

    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards';
        console.log(index / 7);

    });
}

navSlide();