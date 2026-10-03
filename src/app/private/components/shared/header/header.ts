import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
     imports: [CommonModule, FormsModule, ReactiveFormsModule],
     selector: 'app-header',
     styleUrl: './header.scss',
     templateUrl: './header.html'
})
export class Header { }