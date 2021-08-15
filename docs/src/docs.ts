import {
  Dialogue,
  DialogueCssRenderer,
  DialogueParagraph,
  DialogueText,
} from '../../esm/index';

(() => {
  // Text
  const textP1T1: DialogueText = new DialogueText('Hi...', { speed: 50 });
  const textP1T2: DialogueText = new DialogueText("I'm dialogue.", {
    delay: 750,
    speed: 50,
  });

  const textP2T1: DialogueText = new DialogueText("And I'm a second line.", {
    delay: 750,
    speed: 50,
  });

  // Paragraphs
  const paragraph1: DialogueParagraph = new DialogueParagraph([
    textP1T1,
    textP1T2,
  ]);
  const paragraph2: DialogueParagraph = new DialogueParagraph([textP2T1]);

  // Dialogue
  const dialogue: Dialogue = new Dialogue([paragraph1, paragraph2]);

  const dialogueElement: HTMLElement | null =
    document.getElementById('dialogue');

  if (dialogueElement) {
    const dialogueRenderer: DialogueCssRenderer = new DialogueCssRenderer(
      dialogue,
      dialogueElement
    );

    dialogueRenderer.render().play();
  }
})();
