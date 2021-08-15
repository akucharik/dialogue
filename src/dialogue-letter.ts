import { IDialogueEntity } from './dialogue-entity.interface';
import {
  defaultDialogueTextDelay,
  defaultDialogueTextSpeed,
  IDialogueTextOptions,
} from './dialogue-text-options.interface';

export class DialogueLetter implements IDialogueEntity {
  delay = defaultDialogueTextDelay;

  speed = defaultDialogueTextSpeed;

  text = '';

  constructor(text: string, options: IDialogueTextOptions) {
    Object.assign(this, options);
    this.text = text;
  }
}
