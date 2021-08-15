import { IDialogueEntity } from './dialogue-entity.interface';
import {
  defaultDialogueTextDelay,
  defaultDialogueTextSpeed,
  IDialogueTextOptions,
} from './dialogue-text-options.interface';
import { DialogueWord } from './dialogue-word';

export class DialogueText implements IDialogueEntity {
  delay = defaultDialogueTextDelay;

  speed = defaultDialogueTextSpeed;

  words: Array<DialogueWord> = [];

  constructor(text: string, options: IDialogueTextOptions = {}) {
    Object.assign(this, options);

    this.words = text.split(' ').map((word: string, index: number) => {
      if (index === 0) {
        return new DialogueWord(word, { delay: this.delay, speed: this.speed });
      } else {
        return new DialogueWord(word, { speed: this.speed });
      }
    });
  }
}
