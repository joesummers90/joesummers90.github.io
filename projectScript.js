document.getElementById('generateButton').addEventListener('click', generateMandala);

function generateMandala() {
    const points = document.getElementById('points').value;
    const canvas = document.getElementById('mandalaCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define the image paths for each mandala type
    const imagePaths = {
        6: {
            outer: [
                'images/6_points/outer_1.png',
                'images/6_points/outer_2.png',
                'images/6_points/outer_3.png'
            ],
            largeInner: [
                'images/6_points/L_inner_1.png',
                'images/6_points/L_inner_2.png',
                'images/6_points/L_inner_3.png'
            ],
            smallInner: [
                'images/6_points/S_inner_1.png',
                'images/6_points/S_inner_2.png',
                'images/6_points/S_inner_3.png'
            ],
            center: [
                'images/6_points/centre_1.png',
                'images/6_points/centre_2.png',
                'images/6_points/centre_3.png'
            ]
        },
        8: {
            outer: [
                'images/8_points/outer_1.png',
                'images/8_points/outer_2.png',
                'images/8_points/outer_3.png',
                'images/8_points/outer_4.png'
            ],
            largeInner: [
                'images/8_points/L_inner_1.png',
                'images/8_points/L_inner_2.png',
                'images/8_points/L_inner_3.png',
                'images/8_points/L_inner_4.png'
            ],
            smallInner: [
                'images/8_points/S_inner_1.png',
                'images/8_points/S_inner_2.png',
                'images/8_points/S_inner_3.png',
                'images/8_points/S_inner_4.png'
            ],
            center: [
                'images/8_points/centre_1.png',
                'images/8_points/centre_2.png',
                'images/8_points/centre_3.png',
                'images/8_points/centre_4.png'
            ]
        }
    };

    // Get the appropriate image paths based on the selected points
    const selectedPaths = imagePaths[points];

    // Function to randomly select an image from an array
    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Load images
    const outerRing = new Image();
    const largeInnerRing = new Image();
    const smallInnerRing = new Image();
    const centerRing = new Image();

    outerRing.src = getRandomImage(selectedPaths.outer);
    largeInnerRing.src = getRandomImage(selectedPaths.largeInner);
    smallInnerRing.src = getRandomImage(selectedPaths.smallInner);
    centerRing.src = getRandomImage(selectedPaths.center);

    // Draw images when they are loaded
    let imagesLoaded = 0;
    const totalImages = 4;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            drawImage(ctx, outerRing, points);
            drawImage(ctx, largeInnerRing, points);
            drawImage(ctx, smallInnerRing, points);
            drawImage(ctx, centerRing, points);
        }
    }

    outerRing.onload = imageLoaded;
    largeInnerRing.onload = imageLoaded;
    smallInnerRing.onload = imageLoaded;
    centerRing.onload = imageLoaded;
}

function drawImage(ctx, img, points) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const numSections = parseInt(points);

    // Calculate the center of the canvas
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate the angle between each section
    const angle = (2 * Math.PI) / numSections;

    // Draw each section
    for (let i = 0; i < numSections; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(i * angle);

        // Scale the image to half size
        const imgWidth = img.width / 2;
        const imgHeight = img.height / 2;
        ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);

        ctx.restore();
    }
}