import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './private/components/shared/sidebar/sidebar';
import { StorageService } from './private/shared/services/storage.service';
import { Header } from './private/components/shared/header/header';
@Component({
     imports: [RouterOutlet, CommonModule, Sidebar, Header],
     selector: 'app-root',
     styleUrl: './app.scss',
     templateUrl: './app.html'
})
export class App {
     protected readonly title = signal('latest-angular-preperation');
     public isUserLoggedIn: boolean = false;

     constructor(
          private storageService: StorageService
     ) {
          this.isUserLoggedIn = this.storageService.isUserLoggedIn();
     }
}