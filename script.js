function toggleMenu() {
    const navbar_mobil = document.querySelector('.navbar_mobil');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () =>{
        navbar_mobil.classList.toggle('open-nav');
    });
}
toggleMenu();