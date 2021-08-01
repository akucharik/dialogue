import { IDialogueEntity } from "./dialogue-entity.interface";
import { DialogueLetter } from "./dialogue-letter";

export class DialogueWord implements IDialogueEntity {
    delay = 0;

    speed = 0;
    
    letters: Array<DialogueLetter> = [];

    constructor (text: string, speed = 0, delay = 0) {
        this.speed = speed;
        this.delay = delay;
        
        const letters: Array<string> = Array.from(text);
        this.letters = letters.map((letter: string, index: number) => {
            if (index === 0) {
                return new DialogueLetter(letter, speed, delay);
            } else {
                return new DialogueLetter(letter, speed);
            }
        });
        
    }
}
