export default function WallCollision(ballObj, canvas, player, paddleProps) {

    if (ballObj.y + ballObj.rad >= canvas.height) {
        player.lives--;
        // ballObj.x = paddleProps.x - canvas.width / 2 + paddleProps.width - 30;
        ballObj.x = paddleProps.x + paddleProps.width / 2;
        ballObj.y = paddleProps.y - 20;
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        console.log("dx : " + ballObj.dx)
        ballObj.dy = -5;
        // ballObj.dy *= -1;
        return;
    }

    if (ballObj.y - ballObj.rad <= 0) {
        ballObj.dy *= -1;
    }
    if (ballObj.x - ballObj.rad <= 0 || ballObj.x + ballObj.rad >= canvas.width) {
        ballObj.dx *= -1;
    }
}