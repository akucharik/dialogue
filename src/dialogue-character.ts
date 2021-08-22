export class DialogueCharacter {
  get isSpace(): boolean {
    return this.text === ' ';
  }

  text = '';

  constructor(text: string) {
    this.text = text;
  }
}
