import { IDialogueEntityOptions } from './dialogue-entity-options.interface';
import { IDialogueEffect } from './effect/dialogue-effect.interface';

export interface IDialogueTextOptions extends IDialogueEntityOptions {
  delay?: number;
  effect?: IDialogueEffect;
  speed?: number;
}

export const defaultDialogueTextDelay = 0;

export const defaultDialogueTextSpeed = 50;
