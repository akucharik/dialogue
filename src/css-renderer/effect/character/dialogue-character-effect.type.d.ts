import { DialogueCharacterCssRenderer } from '../../dialogue-character-css-renderer';
import { DialogueCharacter } from '../../../dialogue-character';
import { IDialogueCharacterEffectOptions } from '.';
import { IDialogueCharacterEffectOptions } from './dialogue-character-effect.interface';

export type DialogueCharacterEffect<
  TOptions extends IDialogueCharacterEffectOptions = IDialogueCharacterEffectOptions
> = (
  renderer: DialogueCharacterCssRenderer,
  options?: TOptions
) => GSAPTimeline;

export type DialogueCharacterEffectCreator<
  TOptions extends IDialogueCharacterEffectOptions
> = (
  options?: TOptions
) => (renderer: DialogueCharacterCssRenderer) => GSAPTimeline;
