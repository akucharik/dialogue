import { DialogueLetterCssRenderer } from "./dialogue-letter-css-renderer";
import { DialogueWord } from "../dialogue-word";
import { IDialogueCssRenderer } from "./dialogue-css-renderer.interface";

export class DialogueWordCssRenderer implements IDialogueCssRenderer {
    element: HTMLElement;

    letterRenderers: Array<DialogueLetterCssRenderer> = [];

    word: DialogueWord;

    constructor (word: DialogueWord) {
        this.element = document.createElement('span');
        this.element.classList.add('dia-dialogue__word');
        this.word = word;
    }

    render (): DialogueWordCssRenderer {
        this.word.letters.forEach((letter) => {
            const letterRenderer = new DialogueLetterCssRenderer(letter);

            this.element.appendChild(letterRenderer.render().element);
            this.letterRenderers.push(letterRenderer);
        });

        return this;
    }
}
