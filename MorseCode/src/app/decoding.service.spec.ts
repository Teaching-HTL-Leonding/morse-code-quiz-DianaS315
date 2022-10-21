import { TestBed } from '@angular/core/testing';

import { DecodingService } from './decoding.service';

describe('DecodingService', () => {
  let service: DecodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecodingService);
  });

  it('should decode text correctly', () => {
    expect(service.decode('... --- ...')).toBe('SOS');
  });

  it('should be invalid to enter characters which are not contained in morse code', () => {
    expect(service.isValidInput('hallo')).toBe(false);
  });
  it('should be valid to only enter correct morse code characters', () => {
    expect(service.isValidInput('...//  --')).toBe(true);
  });
});
