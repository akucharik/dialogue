import { gsap } from 'gsap';
import { DialogueCharacterCssRenderer } from './dialogue-character-css-renderer';
import {
  IDialogueGroupCssRenderer,
  IDialogueTextCssRendererOptions,
} from './dialogue-css-renderer.interface';
import { msToSeconds } from './effect/utils/ms-to-seconds';
import { DialogueText } from '../dialogue-text';
import { DialogueCharacterEffect } from './effect/character/dialogue-character-effect.type';

export class DialogueTextCssRenderer implements IDialogueGroupCssRenderer {
  animation: GSAPTimeline = gsap.timeline();

  className = '';

  // TODO: Put delay into text effects
  delay = 0;

  element: HTMLElement;

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

    timeline.delay(msToSeconds(this.delay));

    this.characterRenderers.forEach((characterRenderer) => {
      timeline.add(characterRenderer.animation);
    });

    this.animation = timeline;

    return this;
  }
}
