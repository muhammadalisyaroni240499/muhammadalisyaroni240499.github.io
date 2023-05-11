// untuk memindahkan active navbar

const navbar = document.querySelectorAll('.nav-link');
// console.log(navbarActive);
navbar.forEach(element => {
    element.addEventListener('click', function () {
        const navbarActive = document.querySelector('.nav-link.active');
        navbarActive.classList.remove('active');
        element.classList.add('active');
    });
});