import { TestBed } from '@angular/core/testing';

import { EncodingService } from './encoding.service';

describe('EncodingService', () => {
  let service: EncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodingService);
  });

  it('should encode SOS correctly', () => {
    expect(service.encode('SOS')).toBe('...---...');
  });
  it('should encode two sentences correctly', () => {
    expect(service.encode('FUNKTIONIERT SUPER')).toBe(
      '..-. ..- -. -.- - .. --- -. .. . .-. - / ... ..- .--. . .-.'
    );
  });

  it('should be invalid if text is not upper case', () => {
    expect(service.isValidInput('sevus')).toBe(false);
  });
  it('should be invalid to use special characters', () => {
    expect(service.isValidInput('==???!!')).toBe(false);
  });
  it('should be valid to enter all uppercase letters', () => {
    expect(service.isValidInput('HALLO')).toBe(true);
  });
});
