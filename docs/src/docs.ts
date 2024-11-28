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
import {
  createDialogueTextBounceEffect,
  createDialogueTextFadeInEffect,
} from '../../src/css-renderer/effect/text';

(() => {
  // Text Renderers
  const textP1T1Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    new DialogueText('Hi... '),
    {
      className: 'docs__hi',
    }
  );

  const textP1T2Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    new DialogueText("I'm dialogue."),
    {
      delay: 750,
      characterEffect: createTypewriterCharacterEffect(),
    }
  );

  const textP2T1Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    new DialogueText("And I'm... "),
    {
      delay: 750,
      characterEffect: createTypewriterBounceCharacterEffect(),
    }
  );

  const textP2T2Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    new DialogueText('a second '),
    {
      delay: 750,
      effect: createDialogueTextFadeInEffect({
        duration: 1500,
      }),
      characterEffect: createTypewriterBounceCharacterEffect(),
    }
  );

  const textP2T3Renderer: DialogueTextCssRenderer = new DialogueTextCssRenderer(
    new DialogueText('line.'),
    {
      delay: 750,
      effect: createDialogueTextBounceEffect(),
    }
  );

  // Paragraph Renderers
  const textP1Renderer: DialogueParagraphCssRenderer =
    new DialogueParagraphCssRenderer([textP1T1Renderer, textP1T2Renderer], {
      className: 'docs__paragraph',
    });

  const textP2Renderer: DialogueParagraphCssRenderer =
    new DialogueParagraphCssRenderer(
      [textP2T1Renderer, textP2T2Renderer, textP2T3Renderer],
      {
        className: 'docs__paragraph',
      }
    );

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
