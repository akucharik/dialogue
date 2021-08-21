import { defaultDialogueCharacterEffect } from './css-renderer/effect/character';
import { DialogueCharacterEffect } from './css-renderer/effect/character/dialogue-character-effect.type';
import { IDialogueEntityOptions } from './dialogue-entity-options.interface';

export interface IDialogueCharacterOptions extends IDialogueEntityOptions {
  // TODO: delay should be part of the renderer options
  effect?: DialogueCharacterEffect;
}

export class DialogueCharacter {
  // TODO: delay should be part of the renderer options
  effect: DialogueCharacterEffect = defaultDialogueCharacterEffect;

  get isSpace(): boolean {
    return this.text === ' ';
  }

  text = '';

  constructor(text: string, options: IDialogueCharacterOptions = {}) {
    Object.assign(this, options);
    this.text = text;
  }
}
