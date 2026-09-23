document.addEventListener('DOMContentLoaded', () => {
    // UI Element Reference
    const toggleBtn = document.querySelector('.toggle-btn');

    // Synchronize theme toggle button text layout with current DOM root conditions
    if (toggleBtn) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggleBtn.textContent = isDark ? '☀️ Toggle Theme' : '🌓 Toggle Theme';

        // Add theme shift click tracking
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            toggleBtn.textContent = newTheme === 'dark' ? '☀️ Toggle Theme' : '🌓 Toggle Theme';
        });
    }
});
