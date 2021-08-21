import { DialogueCharacterCssRenderer } from '../../dialogue-character-css-renderer';
import { DialogueCharacter } from '../../../dialogue-character';
import { IDialogueCharacterEffectOptions } from '.';
import { IDialogueCharacterEffectOptions } from './models/dialogue-character-effect.interface';

export type DialogueCharacterEffect<
  TOptions extends IDialogueCharacterEffectOptions = IDialogueCharacterEffectOptions
> = (
  character: DialogueCharacter,
  renderer: DialogueCharacterCssRenderer,
  options?: TOptions
) => GSAPTimeline;

export type DialogueCharacterEffectCreator<
  TOptions extends IDialogueCharacterEffectOptions
> = (
  options?: TOptions
) => (
  character: DialogueCharacter,
  renderer: DialogueCharacterCssRenderer
) => GSAPTimeline;
