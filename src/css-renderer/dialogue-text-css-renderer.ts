import { gsap } from 'gsap';
import { DialogueCharacterCssRenderer } from './dialogue-character-css-renderer';
import {
  IDialogueGroupCssRenderer,
  IDialogueTextCssRendererOptions,
} from './dialogue-css-renderer.interface';
import { msToSeconds } from './effect/utils/ms-to-seconds';
import { DialogueText } from '../dialogue-text';
import { DialogueCharacterEffect } from './effect/character/dialogue-character-effect.type';
import { DialogueTextEffect } from './effect/text/dialogue-text-effect.type';

export class DialogueTextCssRenderer implements IDialogueGroupCssRenderer {
  animation: GSAPTimeline = gsap.timeline();

  className = '';

  // TODO: Put delay into text effects
  delay = 0;

  element: HTMLElement;

  effect?: DialogueTextEffect;

  characterEffect?: DialogueCharacterEffect;

  characterRenderers: Array<DialogueCharacterCssRenderer> = [];

  text: DialogueText;

  constructor(text: DialogueText, options?: IDialogueTextCssRendererOptions) {
    Object.assign(this, options);
    this.element = document.createElement('span');
    this.characterRenderers = text.characters.map(
      (character) =>
        new DialogueCharacterCssRenderer(character, this.characterEffect)
    );
    this.text = text;
    this.updateAnimation();
  }

  render(): DialogueTextCssRenderer {
    this.element.classList.add('dia-dialogue__text');

    if (this.className) {
      this.element.classList.add(this.className);
    }

    this.characterRenderers.forEach((characterRenderer) => {
      this.element.appendChild(characterRenderer.render().element);
    });

    return this;
  }

  updateAnimation(): DialogueTextCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Set up delay
    timeline.delay(msToSeconds(this.delay));

    // Set up text animation
    if (this.effect) {
      timeline.add(this.effect(this));
    }

    // Set up character animation
    const characterTimeline: GSAPTimeline = gsap.timeline();

    this.characterRenderers.forEach((characterRenderer) => {
      characterTimeline.add(characterRenderer.animation);
    });

    timeline.add(characterTimeline, 0);

    // Update animation
    this.animation = timeline;

    return this;
  }
}
