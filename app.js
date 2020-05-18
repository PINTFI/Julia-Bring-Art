const navSlide = () => {
    const burger = document.querySelector('.burger')[0];
    const nav = document.querySelector('.nav-links')[0];

    burger.onclick = () => {
        nav.classList.toggle('active');
    }
}