import { gsap } from 'gsap';
import { DialogueCharacterCssRenderer } from './dialogue-character-css-renderer';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { msToSeconds } from '../utils/ms-to-seconds';
import { DialogueText } from '../dialogue-text';

export class DialogueTextCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  characterRenderers: Array<DialogueCharacterCssRenderer> = [];

  text: DialogueText;

  constructor(text: DialogueText) {
    this.element = document.createElement('span');
    this.characterRenderers = text.characters.map(
      (character) => new DialogueCharacterCssRenderer(character)
    );
    this.text = text;
    this.updateTimeline();
  }

  render(): DialogueTextCssRenderer {
    this.element.classList.add('dia-dialogue__text');

    if (this.text.className) {
      this.element.classList.add(this.text.className);
    }

    this.characterRenderers.forEach((characterRenderer) => {
      this.element.appendChild(characterRenderer.render().element);
    });

    return this;
  }

  updateTimeline(): DialogueTextCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    timeline.delay(msToSeconds(this.text.delay));

    // Default animation
    this.characterRenderers.forEach((characterRenderer) => {
      timeline.add(characterRenderer.timeline);
    });

    this.timeline = timeline;

    return this;
  }
}
