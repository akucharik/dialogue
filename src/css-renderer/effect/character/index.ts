import { createTypewriterBounceCharacterEffect } from './typewriter/typewriter-bounce-effect';
import {
  createTypewriterCharacterEffect,
  ITypewriterCharacterEffectOptions,
} from './typewriter/typewriter-effect';
import { DialogueCharacterEffect } from './dialogue-character-effect.type';

const defaultDialogueCharacterEffect: DialogueCharacterEffect<ITypewriterCharacterEffectOptions> =
  createTypewriterCharacterEffect();

export {
  createTypewriterBounceCharacterEffect,
  createTypewriterCharacterEffect,
  defaultDialogueCharacterEffect,
};
