/***
Name: Tracie Thornbury
Project Title: Modded Rocket Patrol
Date: 4/20/2022
Time to Copmlete: 2 days

Point breakdown:
60 Points, UI / SFX / Art redesign to retheme the game
20 Points, Implement a scoring mechanism that adds time to the clock on successful hit
20 Points, Create new spaceship type

 ***/


let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

