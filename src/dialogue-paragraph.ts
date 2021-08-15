import { IDialogueEntity } from './dialogue-entity.interface';
import { DialogueText } from './dialogue-text';
import { DialogueWord } from './dialogue-word';

export class DialogueParagraph implements IDialogueEntity {
  delay = 0;

  speed = 0;

  text: Array<DialogueText> = [];

  words: Array<DialogueWord> = [];

  constructor(text: Array<DialogueText>, speed = 0, delay = 0) {
    this.text = text;
    this.speed = speed;
    this.delay = delay;
    this.words = text.reduce(
      (acc: Array<DialogueWord>, value: DialogueText) => {
        return [...acc, ...value.words];
      },
      []
    );

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
