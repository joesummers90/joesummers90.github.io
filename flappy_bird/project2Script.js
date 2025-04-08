let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let game = document.getElementById("game");
let jumping = 0;
let counter = 0;

setInterval(() => {
    // Get the bounding rectangle of the game container
    let gameRect = game.getBoundingClientRect();

    // Get the character's position relative to the game container
    let characterRect = character.getBoundingClientRect();
    let characterTop = characterRect.top - gameRect.top;

    // Get the block and hole positions relative to the game container
    let blockRect = block.getBoundingClientRect();
    let holeRect = hole.getBoundingClientRect();
    let blockLeft = blockRect.left - gameRect.left;
    let holeTop = holeRect.top - gameRect.top;

    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }

    // Collision detection
    if (
        (characterTop > 480) || // Character hits the bottom
        (blockLeft < 20 && blockLeft > -50 && (characterTop < holeTop || characterTop > holeTop + 150)) // Character hits the block or misses the hole
    ) {
        alert("Game over! Score: " + counter);
        character.style.top = "160px"; // Reset character position
        counter = 0;
    }
}, 10);

hole.addEventListener('animationiteration', () => {
    let random = Math.random() * 3;
    let top = (random * 100) + 150;
    hole.style.top = -(top) + "px"; // Ensure the hole's position is randomized correctly
    counter++;
});

const jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }

        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }

        jumpCount++;
    }, 10);
};