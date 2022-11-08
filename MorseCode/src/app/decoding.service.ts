import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';

const A = 'A'.charCodeAt(0);
const morseCode = [
  /* A */ '.-',
  /* B */ '-...',
  /* C */ '-.-.',
  /* D */ '-..',
  /* E */ '.',
  /* F */ '..-.',
  /* G */ '--.',
  /* H */ '....',
  /* I */ '..',
  /* J */ '.---',
  /* K */ '-.-',
  /* L */ '.-..',
  /* M */ '--',
  /* N */ '-.',
  /* O */ '---',
  /* P */ '.--.',
  /* Q */ '--.-',
  /* R */ '.-.',
  /* S */ '...',
  /* T */ '-',
  /* U */ '..-',
  /* V */ '...-',
  /* W */ '.--',
  /* X */ '-..-',
  /* Y */ '-.--',
  /* Z */ '--..',
];

@Injectable({
  providedIn: 'root',
})
export class DecodingService {
  inputText: String = '';
  validationInput: String = '';
  decodedMessage: String = '';

  public decode(text: String): String {
    const words = text;
    words.split(' / ');
    for (let word of words) {
      if (word != '') {
        if (this.decodedMessage !== '' && !this.decodedMessage.endsWith(' ')) {
          this.decodedMessage += ' ';
        }

        const letters = word.split(' ');
        for (let letter of letters) {
          const ix = morseCode.indexOf(letter);
          if (ix === -1) {
            throw new Error(`This input is invalid ${letter}`);
          }
          this.decodedMessage += String.fromCharCode(A + ix);
        }
      }
    }

    return this.decodedMessage;
  }

  public isValidInput(text: String): boolean {
    this.inputText = text;
    for (let i = 0; i < this.inputText.length; i++) {
      if (
        this.inputText[i] !== ' ' &&
        this.inputText[i] !== '/' &&
        this.inputText[i] !== '.' &&
        this.inputText[i] !== '-'
      ) {
        return false;
      }
    }
    return true;
  }
}
