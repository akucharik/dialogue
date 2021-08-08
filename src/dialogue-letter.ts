import { IDialogueEntity } from './dialogue-entity.interface';

export class DialogueLetter implements IDialogueEntity {
  delay = 0;

  speed = 0;

  text = '';

  constructor(text: string, speed = 0, delay = 0) {
    this.text = text;
    this.speed = speed;
    this.delay = delay;
  }
}
