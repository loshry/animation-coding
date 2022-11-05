//detect browser dimensions
const table = document.getElementsByClassName("table")[0];
const ball = document.getElementsByClassName("ball")[0]; 
const ballCoordinates  = {
    x: Math.floor(Math.random() * 4) + 3,
    y: Math.floor(Math.random() * 4) + 3,
    r: 10
}


const ballRadius = Object.values(ballCoordinates)[2];


const ballSpeed = 4;
let [directionX, directionY] = [ballSpeed, ballSpeed];

// need the function to act on the const ball to move the ball
const moveBall = (ball) => {
    const cx = Object.values(ballCoordinates)[0];
    const cy = Object.values(ballCoordinates)[1];
    const leftLimit = ballRadius;
    const rightLimit = table.offsetWidth - ballRadius;
    const topLimit = ballRadius;
    const bottomLimit = table.offsetHeight - ballRadius;
    

    const [nextCX, nextCY] = [cx + directionX, cy + directionY];
    if (nextCX < leftLimit || nextCX > rightLimit) {
        directionX = -directionX;
    }
    if (nextCY < topLimit || nextCY > bottomLimit) {
        directionY = -directionY;
    }
    const [xPos, yPos] = [cx + directionX, cy + directionY];
    // how do I set these new coordinates to the ball style in css
    // so that height and width are changed to xPos and yPos
    
    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);
