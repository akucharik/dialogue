import { gsap } from 'gsap';
import { DialogueCharacter } from '../dialogue-character';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { DialogueCharacterEffect } from './effect/character/dialogue-character-effect.type';
import { IDialogueCharacterEffectOptions } from './effect/character/dialogue-character-effect.interface';

export class DialogueCharacterCssRenderer implements IDialogueCssRenderer {
  animation: GSAPTimeline = gsap.timeline();

  character: DialogueCharacter;

  effect?: DialogueCharacterEffect<IDialogueCharacterEffectOptions>;

  element: HTMLElement;

  constructor(
    character: DialogueCharacter,
    effect?: DialogueCharacterEffect<IDialogueCharacterEffectOptions>
  ) {
    this.character = character;
    this.effect = effect;
    this.element = document.createElement('span');
    this.updateAnimation();
  }

  render(): DialogueCharacterCssRenderer {
    this.element.classList.add('dia-dialogue__character');

    if (this.character.isSpace) {
      this.element.classList.add('dia-dialogue__character--space');
    }

    this.element.appendChild(document.createTextNode(this.character.text));
    return this;
  }

  updateAnimation(): DialogueCharacterCssRenderer {
    if (this.effect) {
      this.animation = this.effect(this);
    }

    return this;
  }
}
