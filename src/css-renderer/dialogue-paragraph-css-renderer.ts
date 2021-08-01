import { DialogueLetterCssRenderer } from "./dialogue-letter-css-renderer";
import { DialogueParagraph } from "../dialogue-paragraph";
import { DialogueWordCssRenderer } from "./dialogue-word-css-renderer";
import { IDialogueCssRenderer } from "./dialogue-css-renderer.interface";

export class DialogueParagraphCssRenderer implements IDialogueCssRenderer {
    element: HTMLElement;

    letterRenderers: Array<DialogueLetterCssRenderer> = [];

    paragraph: DialogueParagraph;

    wordRenderers: Array<DialogueWordCssRenderer> = [];

    constructor (paragraph: DialogueParagraph) {
        this.element = document.createElement('p');
        this.element.classList.add('dia-dialogue__paragraph');
        this.paragraph = paragraph;
    }

    render (): DialogueParagraphCssRenderer {
        this.paragraph.words.forEach((word, index) => {
            const wordRenderer = new DialogueWordCssRenderer(word);

            this.element.appendChild(wordRenderer.render().element);

            // Add a space after each word except the last one
            if (index !== this.paragraph.words.length - 1) {
                this.element.appendChild(document.createTextNode(' '));
            }

            this.wordRenderers.push(wordRenderer)
            this.letterRenderers = this.letterRenderers.concat(wordRenderer.letterRenderers);
        });

        return this;
    }
}
