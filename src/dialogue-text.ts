import { IDialogueEntity } from './dialogue-entity.interface';
import { DialogueCharacter } from './dialogue-character';
import { IDialogueTextOptions } from './dialogue-text-options.interface';
import { defaultDialogueCharacterEffect } from './css-renderer/effect/character';
import { DialogueCharacterEffect } from './css-renderer/effect/character/dialogue-character-effect.type';

export class DialogueText implements IDialogueEntity {
  // TODO: className should be part of the renderer options
  className = '';

  // TODO: delay should be part of the renderer effect options
  delay = 0;

  // TODO: characterEffect should be part of the renderer options
  characterEffect: DialogueCharacterEffect = defaultDialogueCharacterEffect;

  characters: Array<DialogueCharacter> = [];

  constructor(text: string, options: IDialogueTextOptions = {}) {
    Object.assign(this, options);

    const characters: Array<string> = Array.from(text);

    this.characters = characters.map((character: string) => {
      return new DialogueCharacter(character, {
        effect: this.characterEffect,
      });
    });
  }
}
