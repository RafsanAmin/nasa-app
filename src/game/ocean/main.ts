import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import gconfig from '../config/config';
import { Game2 } from './scenes/Game2';
import { GameOver2 } from './scenes/GameOver2';
import { Boot } from './scenes/Boot';
import { PreGame } from './scenes/PreGame';
import { PreGame2 } from './scenes/PreGame2';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  ...gconfig,
  parent: 'game-container',
  backgroundColor: '#028af8',
  scene: [Boot, Preloader, PreGame, PreGame2, MainMenu, MainGame, GameOver, Game2, GameOver2],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
