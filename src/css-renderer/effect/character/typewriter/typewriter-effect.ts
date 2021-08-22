import { gsap } from 'gsap';
import { DialogueCharacterCssRenderer } from '../../../dialogue-character-css-renderer';
import { msToSeconds } from '../../utils/ms-to-seconds';
import { zeroDuration } from '../../constants';
import {
  DialogueCharacterEffect,
  DialogueCharacterEffectCreator,
} from '../dialogue-character-effect.type';
import { IDialogueCharacterEffectOptions } from '../dialogue-character-effect.interface';

interface ITypewriterConfig {
  animateSpaces: boolean;
  speed: number;
}

const defaultConfig: ITypewriterConfig = {
  animateSpaces: false,
  speed: 50,
};

export interface ITypewriterCharacterEffectOptions
  extends IDialogueCharacterEffectOptions {}

export const createTypewriterCharacterEffect: DialogueCharacterEffectCreator<ITypewriterCharacterEffectOptions> =
  (
    options?: ITypewriterCharacterEffectOptions
  ): DialogueCharacterEffect<ITypewriterCharacterEffectOptions> => {
    return (renderer: DialogueCharacterCssRenderer): GSAPTimeline => {
      const config: ITypewriterConfig = {
        ...defaultConfig,
        ...options,
      };

      const timeline: GSAPTimeline = gsap.timeline();

      if (config.animateSpaces) {
        timeline.delay(msToSeconds(config.speed));
      } else {
        timeline.delay(
          renderer.character.isSpace ? 0 : msToSeconds(config.speed)
        );
      }

      timeline.fromTo(
        renderer.element,
        { opacity: 0 },
        { duration: zeroDuration, opacity: 1 }
      );

      return timeline;
    };
  };
