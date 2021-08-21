import { gsap } from 'gsap';
import { DialogueCharacter } from '../dialogue-character';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { DialogueCharacterEffect } from './effect/character/dialogue-character-effect.type';
import { defaultDialogueCharacterEffect } from './effect/character';
import { IDialogueCharacterEffectOptions } from './effect/character/models/dialogue-character-effect.interface';

export class DialogueCharacterCssRenderer implements IDialogueCssRenderer {
  character: DialogueCharacter;

  effect: DialogueCharacterEffect<IDialogueCharacterEffectOptions> =
    defaultDialogueCharacterEffect;

  element: HTMLElement;

  timeline: GSAPTimeline = gsap.timeline();

  constructor(character: DialogueCharacter) {
    this.character = character;
    this.effect = character.effect;
    this.element = document.createElement('span');
    this.updateTimeline();
  }

  render(): DialogueCharacterCssRenderer {
    this.element.classList.add('dia-dialogue__character');

    if (this.character.isSpace) {
      this.element.classList.add('dia-dialogue__character--space');
    }

    this.element.appendChild(document.createTextNode(this.character.text));
    return this;
  }

  updateTimeline(): DialogueCharacterCssRenderer {
    this.timeline = this.effect(this.character, this);

    return this;
  }
}
