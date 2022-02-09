export default function ResetBall(ballObj, canvas, paddleProps) {
    // ballObj.x = paddleProps.x - canvas.width / 2 + paddleProps.width - 30;
    ballObj.x = paddleProps.x + paddleProps.width / 2;
    ballObj.y = paddleProps.y - 20;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -5;
}