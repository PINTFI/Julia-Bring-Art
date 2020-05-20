const toggleButton = document.getElementsByClassName('toggle-button');
const nav = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    console.log("clicked");

})