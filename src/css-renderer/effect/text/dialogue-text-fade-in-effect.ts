import { gsap } from 'gsap';
import { msToSeconds } from '../utils/ms-to-seconds';
import { DialogueCharacterCssRenderer } from '../../dialogue-character-css-renderer';
import { IDialogueTextEffectOptions } from './dialogue-text-effect.interface';
import {
  DialogueTextEffect,
  DialogueTextEffectCreator,
} from './dialogue-text-effect.type';

interface IDialogueTextFadeInConfig {
  duration: number;
  ease: any; // TODO: Properly type this
  speed: number;
}

const defaultConfig: IDialogueTextFadeInConfig = {
  duration: 200,
  ease: window.CustomEase.create(
    'customFade',
    'M0,0 C0.34,0.114 0.362,0.902 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 '
  ),
  speed: 0,
};

export interface IDialogueTextFadeInEffectOptions
  extends IDialogueTextEffectOptions {
  duration?: number;
  ease?: any; // TODO: Properly type this
}

export const createDialogueTextFadeInEffect: DialogueTextEffectCreator<IDialogueTextFadeInEffectOptions> =
  (
    options?: IDialogueTextFadeInEffectOptions
  ): DialogueTextEffect<IDialogueTextFadeInEffectOptions> => {
    return (renderer: DialogueCharacterCssRenderer): GSAPTimeline => {
      const config: IDialogueTextFadeInConfig = {
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
          { opacity: 0 },
          { duration, opacity: 1, ease: config.ease }
        );

      return timeline;
    };
  };
