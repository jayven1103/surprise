// Function to create sparkles
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const numberOfSparkles = 50; // Number of sparkles to create

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Randomly position sparkles
        const randomTop = Math.random() * 100; // Random top position (0% to 100%)
        const randomLeft = Math.random() * 100; // Random left position (0% to 100%)
        sparkle.style.top = `${randomTop}%`;
        sparkle.style.left = `${randomLeft}%`;

        // Random animation delay
        const randomDelay = Math.random() * 2; // Random delay (0s to 2s)
        sparkle.style.animationDelay = `${randomDelay}s`;

        sparklesContainer.appendChild(sparkle);
    }
}

// Call the function to create sparkles
createSparkles();