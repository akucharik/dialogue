import { DialogueCharacterEffect } from './effect/character/dialogue-character-effect.type';
import { DialogueTextEffect } from './effect/text/dialogue-text-effect.type';

export interface IDialogueCssRenderer {
  animation: GSAPTimeline;
  element: HTMLElement;
  render: () => IDialogueCssRenderer;
  updateAnimation: () => IDialogueCssRenderer;
}

export interface IDialogueGroupCssRenderer extends IDialogueCssRenderer {
  className: string;
  // TODO: Remove delay from rendered options and put into effects
  delay: number;
}

export interface IDialogueCssRendererOptionsBase {
  className?: string;
  // TODO: Remove delay from rendered options and put into effects
  delay?: number;
}

export interface IDialogueCssRendererOptions
  extends IDialogueCssRendererOptionsBase {
  // TODO: Add DialogueEffect
  //effect?: DialogueEffect;
}

export interface IDialogueParagraphCssRendererOptions
  extends IDialogueCssRendererOptionsBase {
  // TODO: Add DialogueParagraphEffect
  //effect?: DialogueParagraphEffect;
}

export interface IDialogueTextCssRendererOptions
  extends IDialogueCssRendererOptionsBase {
  effect?: DialogueTextEffect;
  characterEffect?: DialogueCharacterEffect;
}
