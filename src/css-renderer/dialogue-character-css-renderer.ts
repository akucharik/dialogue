import { gsap } from 'gsap';
import { DialogueCharacter } from '../dialogue-character';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { msToSeconds } from '../utils/ms-to-seconds';

export class DialogueCharacterCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline();

  element: HTMLElement;

  character: DialogueCharacter;

  get isSpace(): boolean {
    return this.character.text === ' ';
  }

  constructor(character: DialogueCharacter) {
    this.element = document.createElement('span');
    this.character = character;
    this.updateTimeline();
  }

  render(): DialogueCharacterCssRenderer {
    this.element.classList.add('dia-dialogue__character');

    if (this.isSpace) {
      this.element.classList.add('dia-dialogue__character--space');
    }

    this.element.appendChild(document.createTextNode(this.character.text));
    return this;
  }

  updateTimeline(): DialogueCharacterCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Default animation
    timeline
      .delay(!this.isSpace ? msToSeconds(this.character.speed) : 0)
      .set(this.element, { opacity: 1 });

    this.timeline = timeline;

    return this;
  }
}
