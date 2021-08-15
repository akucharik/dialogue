declare global {
  interface Window {
    CustomEase: any;
    gsap: GSAP;
  }
}

import { gsap } from 'gsap';
import { Dialogue } from '../dialogue';
import { IDialogueCssRenderer } from './dialogue-css-renderer.interface';
import { DialogueParagraphCssRenderer } from './dialogue-paragraph-css-renderer';

export class DialogueCssRenderer implements IDialogueCssRenderer {
  timeline: GSAPTimeline = gsap.timeline({ paused: true });

  dialogue: Dialogue;

  element: HTMLElement;

  paragraphRenderers: Array<DialogueParagraphCssRenderer> = [];

  constructor(dialogue: Dialogue, element: HTMLElement) {
    this.dialogue = dialogue;
    this.element = element;
    this.paragraphRenderers = dialogue.paragraphs.map(
      (paragraph) => new DialogueParagraphCssRenderer(paragraph)
    );
    this.updateTimeline();
  }

  play(): DialogueCssRenderer {
    this.timeline.play();

    return this;
  }

  render(): DialogueCssRenderer {
    this.element.classList.add('dia-dialogue__dialogue');

    this.paragraphRenderers.forEach((paragraphRenderer) => {
      this.element.appendChild(paragraphRenderer.render().element);
    });

    return this;
  }

  updateTimeline(): DialogueCssRenderer {
    const timeline: GSAPTimeline = gsap.timeline();

    // Default animation
    this.paragraphRenderers.forEach((paragraphRenderer) => {
      timeline.add(paragraphRenderer.timeline);
    });

    this.timeline = timeline;

    return this;
  }
}

/*
// Bounce effect
let timeline = gsap.timeline();

this.letterRenderers.forEach((renderer, index) => {
  // TODO: Factor out different ways of rendering

  // number in seconds
  // const delay = 0.020 //(renderer.letter.speed + renderer.letter.delay) / 1000 ;
  const startTime = 0.02 * index;

  // Timeline
  const letterTimeline = gsap.timeline();

  const ease = window.CustomEase.create(
    'custom',
    'M0,0 C0.34,0.114 0.362,0.902 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 '
  );

  letterTimeline
    .set(renderer.element, { opacity: 1 })
    .from(renderer.element, { duration: 0.95, y: -10, ease });

  timeline.add(letterTimeline, startTime);
});
*/
