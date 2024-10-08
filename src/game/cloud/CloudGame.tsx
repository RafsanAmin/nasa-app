'use client';
import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import StartGame from '@/game/cloud/main';
import { EventBus } from '@/game/cloud/EventBus';
import { useRouter } from 'next/navigation';
import { pfactor, scalefactor } from '../config/config';

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Phaser.Scene | null;
}

interface IProps {
  currentActiveScene?: (scene_instance: Phaser.Scene) => void;
}

const CloudGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame(
  { currentActiveScene },
  ref
) {
  const game = useRef<Phaser.Game | null>(null!);
  const Router = useRouter();
  useLayoutEffect(() => {
    if (game.current === null) {
      game.current = StartGame('game-container');

      if (typeof ref === 'function') {
        ref({ game: game.current, scene: null });
      } else if (ref) {
        ref.current = { game: game.current, scene: null };
      }
    }

    return () => {
      if (game.current) {
        game.current.destroy(true);
        if (game.current !== null) {
          game.current = null;
        }
      }
    };
  }, [ref]);

  useEffect(() => {
    EventBus.on('current-scene-ready', (scene_instance: Phaser.Scene) => {
      if (currentActiveScene && typeof currentActiveScene === 'function') {
        currentActiveScene(scene_instance);
      }

      if (typeof ref === 'function') {
        ref({ game: game.current, scene: scene_instance });
      } else if (ref) {
        ref.current = { game: game.current, scene: scene_instance };
      }
    });
    return () => {
      EventBus.removeListener('current-scene-ready');
    };
  }, [currentActiveScene, ref]);

  return (
    <>
      <div
        style={{
          transform: `scale(${scalefactor})`,
          transformOrigin: 'top left',
          padding: `${pfactor[0]}px 0 0 ${pfactor[1]}px`,
        }}
        id="game-container"
      ></div>
    </>
  );
});

export default CloudGame;
