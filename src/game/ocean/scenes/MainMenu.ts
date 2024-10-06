import { GameObjects, Physics, Scene } from 'phaser';

import { EventBus } from '../EventBus';
import config from '@/game/config/config';

export class MainMenu extends Scene {
  background!: Phaser.GameObjects.Image;
  logo!: Physics.Arcade.Image;
  title!: GameObjects.Text;
  logoTween!: Phaser.Tweens.Tween | null;

  constructor() {
    super('MainMenu');
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);
    this.background = this.add.image(config.width, config.height, 'background');
    this.background.scale = 2;
    this.background.setAlpha(0.85);

    this.logo = this.physics.add
      .image(config.width / 2, config.height / 2 - 50, 'logo')
      .setDepth(100);

    this.title = this.add
      .text(config.width / 2, config.height / 2 + 50, 'Start Game', {
        fontStyle: '700',
        fontFamily: 'K2D',
        fontSize: 24,
        color: '#ffffff',
        align: 'center',
        padding: {
          top: 12,
          bottom: 12,
          left: 24,
          right: 24,
        },
        backgroundColor: '#ffffff50',
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.title.setInteractive();

    this.title.on('pointerdown', () => {
      this.scene.start('PreGame');
    });

    EventBus.emit('current-scene-ready', this);
  }

  update() {}
  changeScene() {
    if (this.logoTween) {
      this.logoTween.stop();
      this.logoTween = null;
    }

    this.scene.start('Game');
  }

  moveLogo(vueCallback: ({ x, y }: { x: number; y: number }) => void) {
    if (this.logoTween) {
      if (this.logoTween.isPlaying()) {
        this.logoTween.pause();
      } else {
        this.logoTween.play();
      }
    } else {
      this.logoTween = this.tweens.add({
        targets: this.logo,
        x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
        y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          if (vueCallback) {
            vueCallback({
              x: Math.floor(this.logo.x),
              y: Math.floor(this.logo.y),
            });
          }
        },
      });
    }
  }
}
