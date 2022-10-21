import { Component } from '@angular/core';
import { EncodingService } from '../encoding.service';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css'],
})
export class EncoderComponent {
  inputText: String = '';
  encodedMessage: String = '';

  constructor(public encoding: EncodingService) {}

  public onEncode() {
    this.encodedMessage = this.encoding.encode(this.inputText);
  }


}
