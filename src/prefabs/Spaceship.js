class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, speed) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = speed;;
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left to right
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}