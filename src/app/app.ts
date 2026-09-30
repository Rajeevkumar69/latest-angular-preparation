import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from 'primeng/button';

@Component({
     imports: [ButtonDirective],
     selector: 'app-root',
     styleUrl: './app.scss',
     templateUrl: './app.html'
})
export class App {
     protected readonly title = signal('latest-angular-preperation');
}
