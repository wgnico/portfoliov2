import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

import { DarkModeService } from '../../core/services/dark-mode.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',  
  imports: [Header, Footer, RouterOutlet, CommonModule],
  templateUrl: './main-layout.html',
})
export class MainLayout {  
  darkModeService: DarkModeService = inject(DarkModeService);
}

