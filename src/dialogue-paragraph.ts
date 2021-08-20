import { IDialogueEntityOptions } from './dialogue-entity-options.interface';
import { DialogueText } from './dialogue-text';

export class DialogueParagraph {
  className = '';

  text: Array<DialogueText> = [];

  constructor(text: Array<DialogueText>, options: IDialogueEntityOptions = {}) {
    Object.assign(this, options);
    this.text = text;
  }
}
