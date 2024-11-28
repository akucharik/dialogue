import { gsap } from 'gsap';
import { msToSeconds } from '../utils/ms-to-seconds';
import { DialogueCharacterCssRenderer } from '../../dialogue-character-css-renderer';
import { IDialogueTextEffectOptions } from './dialogue-text-effect.interface';
import {
  DialogueTextEffect,
  DialogueTextEffectCreator,
} from './dialogue-text-effect.type';

interface IDialogueTextBounceConfig {
  duration: number;
  ease: any; // TODO: Properly type this
  speed: number;
  startOpacity: number;
  startY: number;
}

const defaultConfig: IDialogueTextBounceConfig = {
  duration: 200,
  ease: window.CustomEase.create(
    'custom',
    'M0,0 C0.34,0.114 0.362,0.902 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 '
  ),
  speed: 0,
  startOpacity: 0,
  startY: -10,
};

export interface IDialogueTextBounceEffectOptions
  extends IDialogueTextEffectOptions {
  duration?: number;
  ease?: any; // TODO: Properly type this
  startOpacity?: number;
  startY?: number;
}

export const createDialogueTextBounceEffect: DialogueTextEffectCreator<IDialogueTextBounceEffectOptions> =
  (
    options?: IDialogueTextBounceEffectOptions
  ): DialogueTextEffect<IDialogueTextBounceEffectOptions> => {
    return (renderer: DialogueCharacterCssRenderer): GSAPTimeline => {
      const config: IDialogueTextBounceConfig = {
        ...defaultConfig,
        ...options,
      };

      const timeline: GSAPTimeline = gsap.timeline();
      let duration = msToSeconds(config.duration);
      let speed = msToSeconds(config.speed);

      timeline
        .delay(speed)
        .set(renderer.element, { display: 'inline-block' })
        .fromTo(
          renderer.element,
          { opacity: config.startOpacity, y: config.startY },
          { duration, opacity: 1, y: 0, ease: config.ease }
        );

      return timeline;
    };
  };
