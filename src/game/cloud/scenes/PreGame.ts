import config from '@/game/config/config';
import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

const MAX_STATE = 15;

export class PreGame extends Scene {
  camera!: Phaser.Cameras.Scene2D.Camera;
  background!: Phaser.GameObjects.Image;
  slide!: Phaser.GameObjects.Image;
  state: number = 0;

  constructor() {
    super('PreGame');
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x000000);

    this.background = this.add.image(0, 0, 'background');
    this.background.scale = 2;
    this.background.setAlpha(0.8);

    this.slide = this.add
      .image(config.width / 2, 20, 's_0')
      .setOrigin(0.5, 0)
      .setScale(0.35);

    const button = this.add
      .text(config.width - 100, config.height - 50, '🎮 Start', {
        fontFamily: 'K2D',
        fontSize: 20,
        color: '#000000cc',
        stroke: '#000000',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
        backgroundColor: '#89CFF0',
      })
      .setOrigin(0.5)
      .setDepth(100);

    button.setInteractive();
    button.on('pointerdown', () => {
      this.scene.start('Game');
    });

    const st = this.add
      .text(config.width / 2, config.height - 75, 'Instruction 1 of ' + MAX_STATE, {
        fontFamily: 'K2D',
        fontSize: 16,
        color: '#000000',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
      })
      .setOrigin(0.5);

    const button2 = this.add
      .text(200, config.height - 50, 'Next ›', {
        fontFamily: 'K2D',
        fontSize: 20,
        color: '#ffffff',
        stroke: '#000000',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
        backgroundColor: '#7393B3',
      })
      .setOrigin(0.5)
      .setDepth(100);
    button2.setInteractive();
    button2.on('pointerdown', () => {
      if (this.state !== MAX_STATE - 1) {
        button2.setAlpha(1);
        button3.setAlpha(1);
        this.state++;
      }

      if (this.state === MAX_STATE - 1) {
        button.setAlpha(1);
        button2.setAlpha(0.8);
      }

      this.slide.setTexture(`s_${this.state}`);
      st.setText(`Instructions ${this.state + 1} of ${MAX_STATE}`);
    });

    const button3 = this.add
      .text(75, config.height - 50, '‹ Prev', {
        fontFamily: 'K2D',
        fontSize: 20,
        color: '#ffffff',
        stroke: '#000000',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
        backgroundColor: '#7393B3',
      })
      .setOrigin(0.5)
      .setDepth(100)
      .setAlpha(0.8);
    button3.setInteractive();
    button3.on('pointerdown', () => {
      if (this.state !== 0) {
        button3.setAlpha(1);
        button2.setAlpha(1);

        this.state--;
      }

      if (this.state === 0) {
        button3.setAlpha(0.8);
      }
      this.slide.setTexture(`s_${this.state}`);
      st.setText(`Instructions ${this.state + 1} of ${MAX_STATE}`);
    });

    EventBus.emit('current-scene-ready', this);
  }
}
