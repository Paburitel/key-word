import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {
  private salt = 'It\'s Always Sunny in Philadelphia';
  constructor() { }
  getHashedPassword(password: string) {
    return  CryptoJS.PBKDF2(password, this.salt, { keySize: 128 / 32 }).toString();
  }
}
