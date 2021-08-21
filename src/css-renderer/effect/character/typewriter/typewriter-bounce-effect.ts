import { gsap } from 'gsap';
import { DialogueCharacter } from '../../../../dialogue-character';
import { msToSeconds } from '../../../../utils/ms-to-seconds';
import { DialogueCharacterCssRenderer } from '../../../dialogue-character-css-renderer';
import { IDialogueCharacterEffectOptions } from '../models/dialogue-character-effect.interface';
import {
  DialogueCharacterEffect,
  DialogueCharacterEffectCreator,
} from '../dialogue-character-effect.type';

interface ITypewriterBounceConfig {
  animateSpaces: boolean;
  duration: number;
  ease: any; // TODO: Properly type this
  speed: number;
  startOpacity: number;
  startY: number;
}

const defaultConfig: ITypewriterBounceConfig = {
  animateSpaces: false,
  duration: 0.2,
  ease: window.CustomEase.create(
    'custom',
    'M0,0 C0.34,0.114 0.362,0.902 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 '
  ),
  speed: 0,
  startOpacity: 0,
  startY: -10,
};

export interface ITypewriterBounceCharacterEffectOptions
  extends IDialogueCharacterEffectOptions {
  duration?: number;
  ease?: any; // TODO: Properly type this
  startOpacity?: number;
  startY?: number;
}

export const createTypewriterBounceCharacterEffect: DialogueCharacterEffectCreator<ITypewriterBounceCharacterEffectOptions> =
  (
    options?: ITypewriterBounceCharacterEffectOptions
  ): DialogueCharacterEffect<ITypewriterBounceCharacterEffectOptions> => {
    return (
      character: DialogueCharacter,
      renderer: DialogueCharacterCssRenderer
    ): GSAPTimeline => {
      const config: ITypewriterBounceConfig = {
        ...defaultConfig,
        ...options,
      };

      const timeline: GSAPTimeline = gsap.timeline();

      timeline
        .delay(!character.isSpace ? msToSeconds(config.speed) : 0)
        .fromTo(
          renderer.element,
          { opacity: config.startOpacity, y: config.startY },
          { duration: config.duration, opacity: 1, y: 0, ease: config.ease }
        );

      return timeline;
    };
  };
