import { IDialogueEntity } from './dialogue-entity.interface';
import { DialogueCharacter } from './dialogue-character';
import {
  defaultDialogueTextDelay,
  defaultDialogueTextSpeed,
  IDialogueTextOptions,
} from './dialogue-text-options.interface';

export class DialogueText implements IDialogueEntity {
  className = '';

  delay = defaultDialogueTextDelay;

  speed = defaultDialogueTextSpeed;

  characters: Array<DialogueCharacter> = [];

  constructor(text: string, options: IDialogueTextOptions = {}) {
    Object.assign(this, options);

    const characters: Array<string> = Array.from(text);

    this.characters = characters.map((character: string, index: number) => {
      if (index === 0) {
        return new DialogueCharacter(character, {
          delay: this.delay,
          speed: this.speed,
        });
      } else {
        return new DialogueCharacter(character, { speed: this.speed });
      }
    });
  }
}
