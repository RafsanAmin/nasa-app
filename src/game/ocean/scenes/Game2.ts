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
  Sound!: Phaser.Types.Sound;

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
    this.player = this.physics.add.sprite(config.width / 2 - 100, config.height / 2, 'sml_fish_3');
    this.player.setSize(125, 125);
    this.player.setScale(0.5, 0.5);
    this.createAnim(this.player, 'sml_fish_3');
    // this.player.setCollideWorldBounds(true);

    this.player.setInteractive({ draggable: true });
    this.player.on('drag', (pointer, dragX, dragY) =>
      this.player.setPosition(this.player.x, dragY)
    );

    this.input.on(
      'pointermove',
      function (pointer) {
        this.player.setPosition(this.player.x, pointer.y);
      },
      this
    );
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
      if (p === 'ppl') {
        this.sound.add('sp', { loop: false }).play();
      } else {
        this.sound.add('bp', { loop: false }).play();
      }
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
      this.sound.add('lose', { loop: false }).play();
      this.Sound.stop();
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
          this.setStorage();
          this.changeScene(this.scoreCount !== 0);

          this.Sound.stop();
          this.sound.add('win', { loop: false }).play();
        } else {
          this.countdown.setText('Timer: ' + _L0(minutes) + ':' + _L0(seconds));
        }
      },
    });

    this.Sound = this.sound.add('bg', { loop: true, volume: 0.5 });
    this.Sound.play();
  }

  setStorage() {
    localStorage.setItem('1_2', `${this.scoreCount}`);
    localStorage.setItem(
      '1_2_hs',
      `${Math.max(this.scoreCount, Number(localStorage.getItem('1_2_hs')))}`
    );
  }
  update(): void {
    // move bg

    let seed = Math.random();
    // set score
    this.score.setText('Score: ' + String(this.scoreCount));

    // move player on move

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
