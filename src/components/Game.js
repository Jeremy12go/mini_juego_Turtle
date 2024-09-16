import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const Game = () => {
    const gameContainerRef = useRef(null);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: '#ffffff',
            parent: gameContainerRef.current,
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload() {
            // Puedes cargar imágenes, sonidos, etc.
        }

        let turtle;
        let graphics;

        function create() {
            graphics = this.add.graphics();
            turtle = this.add.circle(400, 300, 10, 0x00ff00);

            // Inicializa una ruta donde dibujar
            this.input.keyboard.on('keydown-W', () => moveForward(10));
            this.input.keyboard.on('keydown-A', () => turnLeft(15));
            this.input.keyboard.on('keydown-D', () => turnRight(15));
        }

        function update() {
            // Aquí actualizamos la escena si es necesario
        }

        let angle = 0;

        function moveForward(distance) {
            const x = turtle.x + distance * Math.cos(Phaser.Math.DegToRad(angle));
            const y = turtle.y + distance * Math.sin(Phaser.Math.DegToRad(angle));

            graphics.lineStyle(2, 0x000000, 1.0);
            graphics.beginPath();
            graphics.moveTo(turtle.x, turtle.y);
            graphics.lineTo(x, y);
            graphics.strokePath();

            turtle.x = x;
            turtle.y = y;
        }

        function turnLeft(degrees) {
            angle -= degrees;
        }

        function turnRight(degrees) {
            angle += degrees;
        }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainerRef}></div>;
};

export default Game;
