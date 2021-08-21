import { Dialogue, DialogueParagraph, DialogueText } from '../../esm/dialogue';
import {
  createTypewriterBounceCharacterEffect,
  createTypewriterCharacterEffect,
} from '../../esm/dialog-character-effect';
import { DialogueCssRenderer } from '../../esm/dialogue-css-renderer';

(() => {
  // Text
  const textP1T1: DialogueText = new DialogueText('Hi... ', {
    className: 'docs__hi',
    characterEffect: createTypewriterCharacterEffect(),
  });
  const textP1T2: DialogueText = new DialogueText("I'm dialogue.", {
    delay: 750,
    characterEffect: createTypewriterBounceCharacterEffect(),
  });

  const textP2T1: DialogueText = new DialogueText("And I'm a second line.", {
    delay: 750,
    characterEffect: createTypewriterCharacterEffect(),
  });

  // Paragraphs
  const paragraph1: DialogueParagraph = new DialogueParagraph(
    [textP1T1, textP1T2],
    { className: 'docs__paragraph' }
  );
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
