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

    this.load.image('background', 'ocean1.jpg');
    this.load.image('background2', 'ocean 2.jpg');
    this.load.image('logo', 'logo.png');
    this.load.image('star', 'star.png');
    this.load.spritesheet('player', 'zpl 1.png', {
      frameWidth: 225,
      frameHeight: 216,
    });

    for (let i = 0; i < 13; i++) {
      this.load.image('1_s_' + i, `/o_1/${i + 1}.png`);
    }
    for (let i = 0; i < 7; i++) {
      this.load.image('2_s_' + i, `/o_2/${i + 1}.png`);
    }

    this.load.spritesheet('zpl1', 'zpl 1.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.spritesheet('zpl2', 'zpl 2.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.spritesheet('zpl3', 'zpl 3.png', {
      frameWidth: 225,
      frameHeight: 216,
    });

    this.load.spritesheet('ppl1', 'ppl 1.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.spritesheet('ppl3', 'ppl 3.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.spritesheet('ppl2', 'ppl 2.png', {
      frameWidth: 225,
      frameHeight: 216,
    });
    this.load.spritesheet('sml_fish_1', 'smol fish 1.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.spritesheet('sml_fish_2', 'smol fish 2.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.spritesheet('sml_fish_3', 'smol fish 3.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.spritesheet('big_fish_1', 'big fish 1.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.spritesheet('big_fish_2', 'big fish 2.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.spritesheet('big_fish_3', 'big fish 3.png', {
      frameWidth: 400,
      frameHeight: 216,
    });
    this.load.video('lvl1', '0001-0075.mp4');
    this.load.video('lvl2', '0001-0076.mp4');

    this.load.audio('sp', 'ocean/se.mp3');
    this.load.audio('bp', 'ocean/be.mp3');
    this.load.audio('bg', 'ocean/bg.mp3');
    this.load.audio('win', 'ocean/win.mp3');
    this.load.audio('lose', 'ocean/lose.mp3');

    this.load.audio('bgp', 'pregame.mp3');
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start('MainMenu');
  }
}
