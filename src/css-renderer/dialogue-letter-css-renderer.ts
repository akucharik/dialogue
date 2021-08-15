import { gsap } from 'gsap';
import { DialogueLetter } from '../dialogue-letter';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { msToSeconds } from '../utils/ms-to-seconds';

export class DialogueLetterCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  letter: DialogueLetter;

  constructor(letter: DialogueLetter) {
    this.element = document.createElement('span');
    this.letter = letter;
    this.updateTimeline();
  }

  render(): DialogueLetterCssRenderer {
    this.element.classList.add('dia-dialogue__character');

    if (this.letter.text === ' ') {
      this.element.classList.add('dia-dialogue__character--space');
    }

    this.element.appendChild(document.createTextNode(this.letter.text));
    return this;
  }

  updateTimeline(): DialogueLetterCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Default animation
    timeline
      .delay(msToSeconds(this.letter.speed))
      .set(this.element, { opacity: 1 });

    this.timeline = timeline;

    return this;
  }
}
