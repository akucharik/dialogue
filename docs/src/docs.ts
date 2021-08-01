import { Dialogue, DialogueCssRenderer, DialogueParagraph, DialogueWord } from '../../esm/index';

(() => {
    const word1: DialogueWord = new DialogueWord('Hi...', 50);
    const word2: DialogueWord = new DialogueWord('I\'m dialogue.', 50, 750);
    const word3: DialogueWord = new DialogueWord('And I\'m a second line.', 50, 1000);

    const paragraph1: DialogueParagraph = new DialogueParagraph([word1, word2]);
    const paragraph2: DialogueParagraph = new DialogueParagraph([word3]);

    const dialogue: Dialogue = new Dialogue([paragraph1, paragraph2]);

    const dialogueElement: HTMLElement | null = document.getElementById('dialogue');

    if (dialogueElement) {
        const dialogueRenderer: DialogueCssRenderer = new DialogueCssRenderer(dialogue, dialogueElement);

        dialogueRenderer.render();
    }
})();