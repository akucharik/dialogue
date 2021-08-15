import { gsap } from 'gsap';
import { DialogueLetterCssRenderer } from './dialogue-letter-css-renderer';
import { DialogueWord } from '../dialogue-word';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { msToSeconds } from '../utils/ms-to-seconds';

export class DialogueWordCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  letterRenderers: Array<DialogueLetterCssRenderer> = [];

  word: DialogueWord;

  constructor(word: DialogueWord) {
    this.element = document.createElement('span');
    this.letterRenderers = word.letters.map(
      (letter) => new DialogueLetterCssRenderer(letter)
    );
    this.word = word;
    this.updateTimeline();
  }

  render(): DialogueWordCssRenderer {
    this.element.classList.add('dia-dialogue__word');

    this.letterRenderers.forEach((letterRenderer) => {
      this.element.appendChild(letterRenderer.render().element);
    });

    return this;
  }

  updateTimeline(): DialogueWordCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    timeline.delay(msToSeconds(this.word.delay));

    // Default animation
    this.letterRenderers.forEach((letterRenderer) => {
      timeline.add(letterRenderer.timeline);
    });

    this.timeline = timeline;

    return this;
  }
}
