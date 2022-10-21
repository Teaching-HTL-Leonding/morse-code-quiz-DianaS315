import { Injectable } from '@angular/core';
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
export class EncodingService {
  public inputText: String = ' ';
  public encodedMessage: String = ' ';
  public encode(text: String): String {
    this.inputText = text.toUpperCase();
    var help;
    for (let i = 0; i < this.inputText.length; i++) {
      if (
        this.inputText.charAt(i) === ' ' &&
        this.inputText.charAt(i + 1) === ' '
      ) {
      } else if (
        this.inputText.charAt(i) === ' ' &&
        this.inputText.charAt(i + 1) !== ' '
      ) {
        this.encodedMessage = this.encodedMessage + ' / ';
      } else {
        help = this.inputText.charCodeAt(i);
        this.encodedMessage = this.encodedMessage + morseCode[help - 65] + '  ';
      }
    }
    return this.encodedMessage;
  }
  public isValidInput(text: String): boolean {
    this.inputText = text;
    var help;
    for (let i = 0; i < this.inputText.length; i++) {
      help = this.inputText.charCodeAt(i);
      if (help < 65 || help > 90) {
        // checks for upper case
        return false;
      }
    }
    return true;
  }
}
