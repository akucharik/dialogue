import { gsap } from 'gsap';
import { DialogueParagraph } from '../dialogue-paragraph';
import { DialogueWordCssRenderer } from './dialogue-word-css-renderer';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';

export class DialogueParagraphCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  paragraph: DialogueParagraph;

  wordRenderers: Array<DialogueWordCssRenderer> = [];

  constructor(paragraph: DialogueParagraph) {
    this.element = document.createElement('p');
    this.paragraph = paragraph;
    this.wordRenderers = paragraph.words.map(
      (word) => new DialogueWordCssRenderer(word)
    );
    this.updateTimeline();
  }

  render(): DialogueParagraphCssRenderer {
    this.element.classList.add('dia-dialogue__paragraph');

    this.wordRenderers.forEach((wordRenderer, index: number) => {
      this.element.appendChild(wordRenderer.render().element);

      // Add a space after each word except the last one
      if (index !== this.paragraph.words.length - 1) {
        this.element.appendChild(document.createTextNode(' '));
      }
    });

    return this;
  }

  updateTimeline(): DialogueParagraphCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Default animation
    this.wordRenderers.forEach((wordRenderer) => {
      timeline.add(wordRenderer.timeline);
    });

    this.timeline = timeline;

    return this;
  }
}
