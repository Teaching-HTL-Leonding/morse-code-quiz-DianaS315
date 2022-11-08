import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { DecodingService } from '../decoding.service';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css'],
})
export class DecoderComponent {
  public decodedMessage: String = '';
  public inputText: String = '';
  public errorMessage: String = '';

  constructor(public decoding: DecodingService) {}

  public onDecode() {
    try {
      this.decodedMessage = this.decoding.decode(this.inputText);
    } catch (ex: any) {
      this.errorMessage = ex;
    }
  }
}
