import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeswitcherService {
  private style: HTMLLinkElement;
  // private button: HTMLButtonElement;
  public theme = 'light-mode';

  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    this.style.href = `/assets/styles/${this.theme}.css`;
    document.head.append(this.style);
   }

   setMode (value:string):void {
    const button = document.getElementById('switch-mode') as HTMLInputElement;

    if (value === 'DARK') {
      button.value = 'LIGHT';
      this.style.href = `/assets/styles/dark-mode.css`;
    } else {
      button.value = 'DARK';
      this.style.href = `/assets/styles/light-mode.css`;
    }
   }
}
