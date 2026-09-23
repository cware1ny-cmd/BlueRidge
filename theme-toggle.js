/**
 * Theme Toggle Script
 * Handles saving, loading, and syncing dark/light modes.
 */

// 1. Immediately Invoked Function Expression (IIFE) to apply theme before body renders
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark-theme');
    } else {
        // If no preference is saved, default to the user's system setting
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            document.documentElement.classList.add('dark-theme');
        }
    }
})();

// 2. Wait for the DOM to load before binding the click listener to your toggle button
document.addEventListener('DOMContentLoaded', () => {
    // Replace '.theme-btn' with the actual class/ID of your toggle element
    const themeButton = document.querySelector('.theme-btn'); 
    
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark-theme');
            
            // Save preference to localStorage so it persists across pages
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
