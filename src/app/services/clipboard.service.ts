import { Injectable } from '@angular/core';

@Injectable()
export class ClipboardService {

  constructor() { }
  copyTextToClipboard(text: string) {
    const txtArea = document.createElement('textarea');
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;
    document.body.appendChild(txtArea);
    txtArea.select();
    let msg: string;
    try {
      const successful = document.execCommand('copy');
      msg = successful ? 'successful' : 'unsuccessful';
      if (successful) {
        return true;
      }
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(txtArea);
    console.log('Copying text command was ' + msg);
    return false;
  }
}
