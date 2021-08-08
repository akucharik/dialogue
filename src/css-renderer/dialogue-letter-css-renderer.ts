import { DialogueLetter } from '../dialogue-letter';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';

export class DialogueLetterCssRenderer implements IDialogueCssRenderer {
  element: HTMLElement;

  letter: DialogueLetter;

  constructor(letter: DialogueLetter) {
    this.element = document.createElement('span');
    this.element.classList.add('dia-dialogue__character');

    if (letter.text === ' ') {
      this.element.classList.add('dia-dialogue__character--space');
    }

    this.letter = letter;
  }

  render(): DialogueLetterCssRenderer {
    this.element.appendChild(document.createTextNode(this.letter.text));

    return this;
  }
}
