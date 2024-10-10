import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { CANVAS, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import gconfig from '../config/config';
import { Boot } from './scenes/Boot';
import { PreGame } from './scenes/PreGame';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: CANVAS,
  ...gconfig,
  parent: 'game-container',
  backgroundColor: '#028af8',
  scene: [Boot, PreGame, Preloader, MainMenu, MainGame, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  input: {
    activePointers: 4,
  },
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
