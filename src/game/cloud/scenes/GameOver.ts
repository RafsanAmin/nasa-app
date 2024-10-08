import config from '@/game/config/config';
import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class GameOver extends Scene {
  camera!: Phaser.Cameras.Scene2D.Camera;
  background!: Phaser.GameObjects.Image;
  gameOverText!: Phaser.GameObjects.Text;
  score!: number;
  complete!: boolean;

  constructor() {
    super('GameOver');
  }

  init(data: { score: number; complete: boolean }) {
    this.score = data.score;
    this.complete = data.complete;
  }
  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x000000);

    this.background = this.add.image(0, 0, 'background');
    this.background.scale = 2;
    this.background.setAlpha(0.8);

    let vid = this.add.video(config.width / 2, 50, 'lvl');
    vid.setScale(0.7, 0.65);
    vid.play(true);

    this.add
      .text(
        config.width / 2,
        config.height - 185,
        !this.complete ? '😔 Game Over. Finish Level to go to next.' : '🏆 Level Completed!',
        {
          fontFamily: 'K2D',
          fontSize: 24,
          color: '#000000',
          stroke: '#000000',
          align: 'center',
        }
      )
      .setOrigin(0.5)
      .setDepth(100);

    this.add
      .text(config.width / 2, config.height - 138, 'Your Score: ' + this.score, {
        fontFamily: 'K2D',
        fontSize: 48,
        color: '#000000',
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.add
      .text(
        config.width / 2,
        config.height - 220,
        'Highest Score: ' + (localStorage.getItem('2') || '0'),
        {
          fontFamily: 'K2D',
          fontSize: 16,
          color: '#000000',
          stroke: '#000000',
          align: 'center',
        }
      )
      .setOrigin(0.5)
      .setDepth(100);

    const button = this.add
      .text(
        config.width / 2 - 10,
        config.height - 75,
        this.complete ? 'Next Level' : 'Play again',
        {
          fontFamily: 'K2D',
          fontSize: 20,
          color: '#000000',
          stroke: '#000000',
          align: 'center',
          padding: {
            top: 12,
            bottom: 12,
            left: 24,
            right: 24,
          },
          backgroundColor: '#ffffff50',
        }
      )
      .setOrigin(1, 0.5)
      .setDepth(100);
    button.setInteractive();
    button.on('pointerdown', () => {
      if (this.complete) {
        if (!localStorage.getItem('1_1') || !localStorage.getItem('1_2')) {
          window.location.href = '/game/ocean';
        } else if (!localStorage.getItem('map1')) {
          window.location.href = '/game/ocean/map1';
        } else if (!localStorage.getItem('map2')) {
          window.location.href = '/game/ocean/map2';
        } else {
          window.location.href = '/game/stat';
        }
      } else {
        this.scene.start('Game');
      }
    });

    const button2 = this.add
      .text(config.width / 2 + 10, config.height - 75, 'Instructions', {
        fontFamily: 'K2D',
        fontSize: 20,
        color: '#000000',
        stroke: '#000000',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
        backgroundColor: '#ffffff50',
      })
      .setOrigin(0, 0.5)
      .setDepth(100);
    button2.setInteractive();
    button2.on('pointerdown', () => {
      this.scene.start('PreGame');
    });

    EventBus.emit('current-scene-ready', this);
  }

  changeScene() {
    this.scene.start('MainMenu');
  }
}
