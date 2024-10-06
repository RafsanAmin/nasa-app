/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '@/game/config/config';
import _L0 from '@/util/leadingzero';
import { Scene } from 'phaser';

const TIME = 10;
const POINT_LIMIT = 25;
const OBST_LIMIT = 5;

export class Game2 extends Scene {
  camera!: Phaser.Cameras.Scene2D.Camera;
  background!: Phaser.GameObjects.TileSprite;
  player!: Phaser.GameObjects.Sprite;
  obst!: Phaser.GameObjects.Sprite[];
  Points!: Phaser.GameObjects.Sprite[];
  pointCount!: number;
  score!: Phaser.GameObjects.Text;
  scoreCount!: number;
  obstCount!: number;
  countdown!: Phaser.GameObjects.Text;
  initTime!: number;

  constructor() {
    super('Game2');
  }

  init() {
    this.Points = [];
    this.obst = [];
    this.pointCount = 0;
    this.scoreCount = 0;
    this.obstCount = 0;
  }

  createAnim(ref: Phaser.GameObjects.Sprite, name: string) {
    this.anims.create({
      key: name,
      frames: name,
      frameRate: 15,
      repeat: -1,
    });
    ref.play(name);
  }

  addPlayer() {
    this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'sml_fish_3');
    this.player.setSize(125, 125);
    this.player.setScale(0.5, 0.5);
    this.createAnim(this.player, 'sml_fish_3');
    // this.player.setCollideWorldBounds(true);

    this.player.on('drag', (p, x, y) => {
      this.player.y = y;
    });
  }

  createPoints() {
    let p = 'ppl',
      scoreInc = 1,
      scale = 0.25;

    if (Math.random() < 0.1) {
      p = 'zpl';
      scoreInc = 5;
      scale = 0.3;
    }

    const name = `${p}${Math.ceil(Math.random() * 3)}`;

    const rect = this.physics.add.sprite(config.width, config.height / 2, name);

    // set baisc
    rect.setScale(scale, scale);
    rect.setSize(100, 150);
    rect.setRotation(Math.ceil(Math.random() * 360));
    this.createAnim(rect, name);

    //set position
    this.reposite(rect);

    //adding score
    this.physics.add.overlap(this.player, rect, (player, tecta) => {
      this.reposite(tecta);

      this.scoreCount += scoreInc;
    });

    rect?.body?.setVelocityX(-250);

    return rect;
  }

  createObst() {
    const name = `big_fish_${Math.ceil(Math.random() * 3)}`;

    const rect = this.physics.add.sprite(config.width, config.height / 2, name);

    // set baisc

    rect.setScale(0.6, 0.6);
    rect.setSize(210, 100);
    this.createAnim(rect, name);
    rect.setFlipX(true);

    //set position

    this.reposite(rect);

    //gameover

    this.physics.add.overlap(this.player, rect, (player, tecta) => {
      this.changeScene();
    });

    rect?.body?.setVelocityX(-250);

    return rect;
  }

  changeScene(complete: boolean = false) {
    this.scene.switch('GameOver2', { score: this.scoreCount, complete });
  }

  reposite(r: any): void {
    r.setRandomPosition(
      config.width + 120 + Math.random() * config.width * 2 + 0,
      0,
      config.height
    );
  }

  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background2');
    this.background.setOrigin(0, 0);

    this.addPlayer();

    this.score = this.add.text(config.width - 150, 50, 'Score: 0', {
      fontSize: '25px',
      fontFamily: 'K2D',
    });

    this.countdown = this.add.text(50, 50, 'Timer: 01:00', {
      fontSize: '25px',
      fontFamily: 'K2D',
    });

    this.initTime = Number(new Date()) + 1000 * TIME;

    this.time.addEvent({
      delay: 1000,
      repeat: -1,
      callback: () => {
        const elapsedTime = this.initTime - Number(new Date());
        const minutes = Math.floor(elapsedTime / (1000 * 60));
        const seconds = Math.floor((elapsedTime / (1000 * 60) - minutes) * 60);

        if (elapsedTime <= 0) {
          this.changeScene(this.scoreCount !== 0);
        } else {
          this.countdown.setText('Timer: ' + _L0(minutes) + ':' + _L0(seconds));
        }
      },
    });
  }
  update(): void {
    // move bg

    let seed = Math.random();
    // set score
    this.score.setText('Score: ' + String(this.scoreCount));

    console.log(seed);
    // move player on move
    this.player.setPosition(this.player.x, this.game.input.mousePointer.y);

    // create points and reposite if ends
    if (this.pointCount < POINT_LIMIT) {
      this.Points.push(this.createPoints());
      this.pointCount++;
    }
    this.Points.forEach((r) => {
      if (r.x <= -50) {
        this.reposite(r);
      }
    });

    //create obst
    if (this.pointCount < OBST_LIMIT) {
      this.obst.push(this.createObst());
      this.obstCount++;
    }
    this.obst.forEach((r) => {
      if (r.x <= -50) {
        this.reposite(r);
      }
    });
  }
}