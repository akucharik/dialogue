import { IDialogueEntity } from './dialogue-entity.interface';
import { DialogueWord } from './dialogue-word';

export class DialogueParagraph implements IDialogueEntity {
  delay = 0;

  speed = 0;

  words: Array<DialogueWord> = [];

  constructor(words: Array<DialogueWord>, speed = 0, delay = 0) {
    this.words = words;
    this.speed = speed;
    this.delay = delay;

    // TODO: Delay for first word
    /*
    this.words = words.map((word: DialogueWord, index: number) => {
      if (index === 0) {
        return new DialogueWord(letter, speed, delay);
      } else {
        return new DialogueWord(letter, speed);
      }
    });
    */
  }
}
