function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0)';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(100%)';
}

// Smooth scroll functionality is now handled via CSS's 'scroll-behavior: smooth'