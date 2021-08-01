import { DialogueParagraph } from "./dialogue-paragraph";

export class Dialogue {
    paragraphs: Array<DialogueParagraph> = [];

    constructor (paragraphs: Array<DialogueParagraph>) {
        this.paragraphs = paragraphs;
    }
}
