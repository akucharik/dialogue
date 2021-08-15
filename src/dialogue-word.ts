import { IDialogueEntity } from './dialogue-entity.interface';
import { DialogueLetter } from './dialogue-letter';
import {
  defaultDialogueTextDelay,
  defaultDialogueTextSpeed,
  IDialogueTextOptions,
} from './dialogue-text-options.interface';

export class DialogueWord implements IDialogueEntity {
  delay = defaultDialogueTextDelay;

  letters: Array<DialogueLetter> = [];

  speed = defaultDialogueTextSpeed;

  constructor(text: string, options: IDialogueTextOptions) {
    Object.assign(this, options);

    const letters: Array<string> = Array.from(text);
    this.letters = letters.map((letter: string, index: number) => {
      if (index === 0) {
        return new DialogueLetter(letter, {
          delay: this.delay,
          speed: this.speed,
        });
      } else {
        return new DialogueLetter(letter, { speed: this.speed });
      }
    });
  }
}
