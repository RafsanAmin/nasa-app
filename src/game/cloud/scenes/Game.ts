/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '@/game/config/config';
import _L0 from '@/util/leadingzero';
import { Scene } from 'phaser';

const TIME = 120;
const POINT_LIMIT = 20;
const OBST_LIMIT = 4;
const TOTAL_HEALTH = 10;

export class Game extends Scene {
  camera!: Phaser.Cameras.Scene2D.Camera;
  background!: Phaser.GameObjects.TileSprite;
  player!: Phaser.GameObjects.Sprite;
  obst!: Phaser.GameObjects.Sprite[];
  Points!: Phaser.GameObjects.Sprite[];
  pointCount!: number;
  Laser!: Phaser.GameObjects.Image[];
  LaserCount!: number;
  score!: Phaser.GameObjects.Text;
  scoreCount!: number;
  obstCount!: number;
  countdown!: Phaser.GameObjects.Text;
  initTime!: number;
  healthCount!: number;
  healthBar!: Phaser.GameObjects.Rectangle;
  offOverlap!: boolean;

  constructor() {
    super('Game');
  }

  init() {
    this.Points = [];
    this.obst = [];
    this.Laser = [];
    this.pointCount = 0;
    this.scoreCount = 0;
    this.LaserCount = 0;
    this.obstCount = 0;

    this.healthCount = TOTAL_HEALTH;
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
    this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');
    this.player.setSize(160, 130);
    this.player.setScale(0.4, 0.4);
    this.createAnim(this.player, 'player');
    // this.player.setCollideWorldBounds(true);

    this.player.on('drag', (p, x, y) => {
      this.player.y = y;
    });
  }
  addHealthBar() {
    this.add.rectangle(config.width / 2, 50, 150, 20, 0xff0000);
    this.add.text((config.width - 150) / 2 - 10, 40, '❤️').setOrigin(1, 0);
    this.healthBar = this.add.rectangle((config.width - 150) / 2, 50 - 10, 150, 20, 0x7393b3);
    this.healthBar.setOrigin(0, 0);
  }
  createPoints() {
    let name: string = '';

    let scale = 0.15;

    if (Math.random() < 0.25) {
      name = `dust`;
    } else if (Math.random() < 0.5) {
      name = `volcanic${Math.ceil(Math.random() * 2)}`;
    } else if (Math.random() < 0.75) {
      name = `soot`;
    } else {
      name = `seasalt`;
    }

    const rect = this.physics.add.sprite(config.width, config.height / 2, name);
    // set baisc
    rect.setScale(scale);
    rect.setSize(210, 210);
    rect.setRotation(Math.ceil(Math.random() * 360));

    if (name === 'seasalt') {
      this.createAnim(rect, 'seasalt');
    }
    //set position
    this.reposite(rect);

    rect?.body?.setVelocityX(-250);

    this.physics.add.overlap(this.player, rect, (l, r) => {
      if (!this.offOverlap) {
        this.player.setAlpha(0.3);
        this.healthCount--;
        this.offOverlap = true;
        setTimeout(() => {
          this.player.setAlpha(1);
          this.offOverlap = false;
        }, 1000);
      }
    });

    return rect;
  }

  createObst() {
    const name = `asteriods`;

    const rect = this.physics.add.sprite(config.width, config.height / 2, name);

    rect.setRotation(Math.PI / 20);
    // set baisc

    rect.setScale(0.4, 0.4);
    rect.setSize(180, 180);
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
    this.scene.switch('GameOver', { score: this.scoreCount, complete });
  }

  reposite(r: any): void {
    r.setRandomPosition(
      config.width + 120 + Math.random() * config.width * 2 + 0,
      0,
      config.height
    );
  }
  createShoot() {
    const shoot = this.physics.add.image(this.player.x, this.player.y, 'laser');
    this.Laser.push(shoot);
    shoot.setScale(0.07);
    shoot.setVelocityX(250);

    this.Points.forEach((r) => {
      this.physics.add.overlap(shoot, r, (a, b) => {
        a.destroy();
        this.reposite(b);
        this.scoreCount += 1;
      });
    });
    this.obst.forEach((r) => {
      this.physics.add.overlap(shoot, r, (a, b) => {
        a.destroy();
      });
    });
  }
  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
    this.background.setOrigin(0, 0);

    this.addPlayer();
    this.addHealthBar();

    this.score = this.add.text(config.width - 150, 50, 'Score: 0', {
      fontSize: '25px',
      fontFamily: 'K2D',
      color: '#000000',
    });

    this.countdown = this.add.text(50, 50, '🕛 01:00', {
      fontSize: '25px',
      fontFamily: 'K2D',
      color: '#000000',
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
          this.changeScene(true);
        } else {
          this.countdown.setText('🕛 ' + _L0(minutes) + ':' + _L0(seconds));
        }
      },
    });

    this.input.addListener('pointerdown', () => {
      this.createShoot();
    });
  }
  update(): void {
    if (this.healthCount < 0) {
      this.scene.start('GameOver', { score: this.scoreCount });
    }
    // move bg
    this.background.tilePositionX += 0.5;

    let seed = Math.random();
    // set score
    this.score.setText('Score: ' + String(this.scoreCount));

    this.healthBar.setSize((this.healthCount / TOTAL_HEALTH) * 150, 20);

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
    if (this.obstCount < OBST_LIMIT) {
      this.obst.push(this.createObst());
      this.obstCount++;
    }
    this.obst.forEach((r) => {
      if (r.x <= -50) {
        this.reposite(r);
      }
    });

    this.Laser.forEach((r) => {
      if (r.x > config.width + 30) {
        r.destroy();
      }
    });
  }
}
