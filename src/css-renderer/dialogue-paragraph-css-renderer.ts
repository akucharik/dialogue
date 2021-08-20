import { gsap } from 'gsap';
import { DialogueParagraph } from '../dialogue-paragraph';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { DialogueTextCssRenderer } from './dialogue-text-css-renderer';

export class DialogueParagraphCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  paragraph: DialogueParagraph;

  textRenderers: Array<DialogueTextCssRenderer> = [];

  constructor(paragraph: DialogueParagraph) {
    this.element = document.createElement('p');
    this.paragraph = paragraph;

    this.textRenderers = paragraph.text.map(
      (text) => new DialogueTextCssRenderer(text)
    );

    this.updateTimeline();
  }

  render(): DialogueParagraphCssRenderer {
    this.element.classList.add('dia-dialogue__paragraph');

    if (this.paragraph.className) {
      this.element.classList.add(this.paragraph.className);
    }

    this.textRenderers.forEach((textRenderer) => {
      this.element.appendChild(textRenderer.render().element);
    });

    return this;
  }

  updateTimeline(): DialogueParagraphCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Default animation
    this.textRenderers.forEach((textRenderer) => {
      timeline.add(textRenderer.timeline);
    });

    this.timeline = timeline;

    return this;
  }
}
