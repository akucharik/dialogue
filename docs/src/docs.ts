import { DialogueText } from '../../esm/dialogue';
import {
  createTypewriterBounceCharacterEffect,
  createTypewriterCharacterEffect,
} from '../../esm/dialog-character-effect';
import {
  DialogueCssRenderer,
  DialogueParagraphCssRenderer,
  DialogueTextCssRenderer,
} from '../../esm/dialogue-css-renderer';

(() => {
  // Text
  const textP1T1: DialogueText = new DialogueText('Hi... ');
  const textP1T2: DialogueText = new DialogueText("I'm dialogue.");
  const textP2T1: DialogueText = new DialogueText("And I'm a second line.");

  // Text Renderers
  const textP1T1Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    textP1T1,
    {
      className: 'docs__hi',
    }
  );

  const textP1T2Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    textP1T2,
    {
      delay: 750,
      characterEffect: createTypewriterCharacterEffect(),
    }
  );

  const textP2T1Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    textP2T1,
    {
      delay: 750,
      characterEffect: createTypewriterBounceCharacterEffect(),
    }
  );

  // Paragraph Renderers
  const textP1Renderer: DialogueParagraphCssRenderer =
    new DialogueParagraphCssRenderer([textP1T1Renderer, textP1T2Renderer], {
      className: 'docs__paragraph',
    });

  const textP2Renderer: DialogueParagraphCssRenderer =
    new DialogueParagraphCssRenderer([textP2T1Renderer], {
      className: 'docs__paragraph',
    });

  // Dialogue Renderer
  const dialogueElement: HTMLElement | null =
    document.getElementById('dialogue');

  if (dialogueElement) {
    const dialogueRenderer: DialogueCssRenderer = new DialogueCssRenderer(
      [textP1Renderer, textP2Renderer],
      dialogueElement,
      { className: 'docs__dialogue' }
    );

    dialogueRenderer.render().play();
  }
})();
