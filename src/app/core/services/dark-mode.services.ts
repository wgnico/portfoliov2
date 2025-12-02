import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeSignal = signal<string>(
    typeof window !== 'undefined' 
      ? JSON.parse(window.localStorage.getItem('darkModeSignal') ?? '"light"') 
      : 'light' // Valor por defecto cuando no se puede acceder a window
  );

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === "dark" ? "light" : "dark"));
  }

  constructor() {
    if (typeof window !== 'undefined') {
      effect(() => {
        window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
      });
    }
  }
}
