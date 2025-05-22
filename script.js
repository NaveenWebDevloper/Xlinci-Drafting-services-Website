// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




let preview = document.getElementById('preview');
let imagebox = document.getElementById('image-box') 
let img1 = document.getElementById('img1');

function previewbtn() {
        preview.style.display = 'none';
}

function showpreview1() {
    imagebox.innerHTML = '<img src="assets/Text-preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';
    preview.style.animation = 'preview 2s ease-in-out';
    preview.style.transition = 'all 3s ease';
}

function showpreview2(){
    imagebox.innerHTML = '<img src="assets/Utility-Preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';  
    preview.style.transition = 'all 3s ease';
}
function showpreview3(){
    imagebox.innerHTML = '<img src="assets/Graphs-preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';  
    preview.style.transition = 'all 3s ease';
}
function showpreview4(){
    imagebox.innerHTML = '<img src="assets/Mechanical-preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';  
    preview.style.transition = 'all 3s ease';
}
function showpreview5(){
    imagebox.innerHTML = '<img src="assets/Design-preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';  
    preview.style.transition = 'all 3s ease';
}function showpreview6(){
    imagebox.innerHTML = '<img src="assets/Exploded-preview.jpg" alt="">';
    preview.style.display = 'block';
    preview.style.transform = 'translateY(0)';  
    preview.style.transition = 'all 3s ease';
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

