import { DialogueCharacter } from './dialogue-character';

export class DialogueText {
  characters: Array<DialogueCharacter> = [];

  constructor(text: string) {
    this.characters = this.getCharacters(text);
  }

  private getCharacters(text: string): Array<DialogueCharacter> {
    const characters: Array<string> = Array.from(text);

    return characters.map((character: string) => {
      return new DialogueCharacter(character);
    });
  }
}
