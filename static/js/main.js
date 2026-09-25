// main.js — students will add JavaScript here as features are built

// Lift the floating navbar with a soft shadow once the page scrolls
const navbar = document.querySelector('.navbar');
if (navbar) {
    const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}
