const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;


// AFFECTATION 

menuBtn.addEventListener('click', () =>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


