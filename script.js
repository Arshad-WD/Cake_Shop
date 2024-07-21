document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById('loading');
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    setTimeout(() => {
        loading.style.display = 'none';
        header.classList.remove('hidden');
    }, 4000);

    });
    
