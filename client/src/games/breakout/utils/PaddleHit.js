export default function PaddleHit(ballObj, paddleProps) {

    if (
        ballObj.x < paddleProps.x + paddleProps.width &&
        ballObj.x > paddleProps.x &&
        paddleProps.y < paddleProps.y + paddleProps.height &&
        ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
    ) {
        // CHECK WHERE THE ballObj HIT THE paddleProps
        let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2);

        // NORMALIZE THE VALUES
        collidePoint = collidePoint / (paddleProps.width / 2);

        // CALCULATE THE ANGLE OF THE ballObj
        let angle = (collidePoint * Math.PI) / 3;
        // console.log(angle);

        ballObj.dx = ballObj.speed * Math.sin(angle);
        console.log("paddle hit : dx : " + ballObj.dx)
        ballObj.dy = -ballObj.speed * Math.cos(angle);
    }
}