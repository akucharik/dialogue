import { gsap } from 'gsap';
import {
  IDialogueGroupCssRenderer,
  IDialogueParagraphCssRendererOptions,
} from './dialogue-css-renderer.interface';
import { DialogueTextCssRenderer } from './dialogue-text-css-renderer';

export class DialogueParagraphCssRenderer implements IDialogueGroupCssRenderer {
  animation: GSAPTimeline = gsap.timeline();

  className = '';

  // TODO: Put delay into paragraph effects
  delay = 0;

  element: HTMLElement;

  textRenderers: Array<DialogueTextCssRenderer> = [];

  constructor(
    textRenderers: Array<DialogueTextCssRenderer>,
    options?: IDialogueParagraphCssRendererOptions
  ) {
    Object.assign(this, options);
    this.element = document.createElement('p');
    this.textRenderers = textRenderers;
    this.updateAnimation();
  }

  render(): DialogueParagraphCssRenderer {
    this.element.classList.add('dia-dialogue__paragraph');

    if (this.className) {
      this.element.classList.add(this.className);
    }

    this.textRenderers.forEach((textRenderer) => {
      this.element.appendChild(textRenderer.render().element);
    });

    return this;
  }

  updateAnimation(): DialogueParagraphCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    this.textRenderers.forEach((textRenderer) => {
      timeline.add(textRenderer.animation);
    });

    this.animation = timeline;

    return this;
  }
}
