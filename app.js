const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navi-links');

    burger.onclick = () => {
        nav.classList.toggle('navi-active');
    }
}

navSlide();