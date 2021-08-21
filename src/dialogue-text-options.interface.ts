import { DialogueCharacterEffect } from './css-renderer/effect/character/dialogue-character-effect.type';
import { IDialogueEntityOptions } from './dialogue-entity-options.interface';

export interface IDialogueTextOptions extends IDialogueEntityOptions {
  // TODO: delay should be part of the renderer options
  characterEffect?: DialogueCharacterEffect;
  // TODO: delay should be part of the renderer effect options
  delay?: number;
}
