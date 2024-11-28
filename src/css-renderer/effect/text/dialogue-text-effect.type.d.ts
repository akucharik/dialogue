import { DialogueTextCssRenderer } from '../..';
import { IDialogueGroupCssRenderer } from '../../dialogue-css-renderer.interface';

export type DialogueTextEffect<
  TOptions extends IDialogueTextEffectOptions = IDialogueTextEffectOptions
> = (renderer: IDialogueTextCssRenderer, options?: TOptions) => GSAPTimeline;

export type DialogueTextEffectCreator<
  TOptions extends IDialogueTextEffectOptions
> = (options?: TOptions) => (renderer: DialogueTextCssRenderer) => GSAPTimeline;
