import React, { useEffect, useRef } from 'react'
import { BallMovement } from "./BallMovement"
import data from "../../data"
import WallCollision from './utils/WallCollision'
import Paddle from './Paddle'
import Brick from './Brick'
import BrickCollision from './utils/BrickCollision'
import PaddleHit from './utils/PaddleHit'
import PlayerStats from './PlayerStats'
import AllBroken from './utils/AllBroken'
import ResetBall from './utils/ResetBall'



let bricks = [];

let { ballObj, paddleProps, brickObj, player } = data;


export default function Board() {
    const canvasRef = useRef(null)


    useEffect(() => {


        const render = () => {

            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')

            paddleProps.y = canvas.height - 30;

            // Assign Bricks
            let newBrickSet = Brick(player.level, bricks, canvas, brickObj);
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }


            ctx.clearRect(0, 0, canvas.width, canvas.height);
            PlayerStats(ctx, player, canvas);

            if (player.lives === 0) {
                alert("Game Over! Press ok to restart");
                bricks.length = 0;
                player.lives = 2;
                player.level = 0;
                player.score = 0;
                ResetBall(ballObj, canvas, paddleProps);

            }

            // Display Bricks
            bricks.map((brick) => {
                return brick.draw(ctx);
            })

            // Handle Ball Movement
            BallMovement(ctx, ballObj);

            // Check all broken
            AllBroken(bricks, player, canvas, ballObj);

            // Ball and Wall Collision
            WallCollision(ballObj, canvas, player, paddleProps);

            // Brick Collision
            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if (brickCollision.hit && !bricks[i].broke) {
                    // console.log(brickCollision)
                    if (brickCollision.axis === "X") {
                        ballObj.dx *= -1;
                        bricks[i].broke = true;
                    } else if (brickCollision.axis === "Y") {
                        ballObj.dy *= -1;
                        bricks[i].broke = true;
                    }
                    player.score += 10;
                }
            }

            Paddle(ctx, canvas, paddleProps);

            // Paddle + Ball Collision
            PaddleHit(ballObj, paddleProps);

            requestAnimationFrame(render)
        }
        render()

    }, [])


    return (
        <div>
            <h1>Board</h1>
            <canvas
                id="canvas"
                ref={canvasRef}
                onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2}
                height="500px"
                width={window.innerWidth - 20}
            />
        </div>
    )
}
