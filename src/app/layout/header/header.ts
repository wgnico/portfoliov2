import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../core/services/dark-mode.services';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }
}
