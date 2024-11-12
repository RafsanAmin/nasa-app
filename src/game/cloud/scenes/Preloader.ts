import config from '@/game/config/config';
import { Scene } from 'phaser';

export class Preloader extends Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(config.width / 2, config.height / 2, 'background').setAlpha(0.7);

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(config.width / 2, config.height / 2, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(config.width / 2 - 230, config.height / 2, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on('progress', (progress: number) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath('/assets');

    this.load.image('background', 'sky.jpg');

    for (let i = 0; i < 15; i++) {
      this.load.image('s_' + i, `/c/${i + 1}.JPG`);
    }

    this.load.image('logo', 'logo.png');
    this.load.image('star', 'star.png');
    this.load.image('laser', 'laser.png');
    this.load.image('soot', 'soot.png');
    this.load.image('dust', 'dust.png');
    this.load.spritesheet('seasalt', 'seasalt.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.image('asteriods', 'asteriod.png');
    this.load.image('volcanic1', 'volcanic1.png');
    this.load.image('volcanic2', 'volcanic2.png');
    this.load.spritesheet('player', 'char.png', {
      frameWidth: 225,
      frameHeight: 216,
    });

    this.load.video('lvl', '0001-0060.mp4');

    this.load.audio('hurt', 'cloud/hurt.wav');
    this.load.audio('laser', 'cloud/laser.mp3');
    this.load.audio('hit', 'cloud/hit.mp3');
    this.load.audio('bg', 'cloud/bg.mp3');
    this.load.audio('win', 'cloud/win.mp3');
    this.load.audio('lose', 'cloud/lose.mp3');

    this.load.audio('bgp', 'pregame.mp3');
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start('MainMenu');
  }
}
