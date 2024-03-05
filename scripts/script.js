document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-up-trigger');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        // Optional: Define a threshold (e.g., 100px) to trigger the animation sooner
        const threshold = 100; // Adjust this value based on your needs
    
        // Check if the top of the element is within 'threshold' pixels of the viewport's bottom
        return (
            rect.top + threshold <= windowHeight &&
            rect.left >= 0 &&
            rect.bottom - threshold >= 0 && // Adjusted to allow partial visibility
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    

    function runFadeInUpAnimations() {
        elements.forEach(el => {
            if (isInViewport(el) && !el.classList.contains('fade-in-up')) {
                el.classList.add('fade-in-up');
            }
        });
    }

    window.addEventListener('scroll', runFadeInUpAnimations);
    runFadeInUpAnimations(); // Initial check on load
});
