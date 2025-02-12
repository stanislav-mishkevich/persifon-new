import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule // Ensure MatDividerModule is included here
  ],
  template: `
    <mat-toolbar class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center w-full">
          <a routerLink="/" class="text-2xl font-bold no-underline text-gray-900">Persifon</a>
          
          <div class="hidden lg:flex space-x-4">
            <a mat-button routerLink="/" routerLinkActive="mat-primary" [routerLinkActiveOptions]="{exact: true}">
              Home
            </a>
            <a mat-button routerLink="/about" routerLinkActive="mat-primary">
              About
            </a>
            <a mat-button routerLink="/solutions" routerLinkActive="mat-primary">
              Solutions
            </a>
            <a mat-button routerLink="/technology" routerLinkActive="mat-primary">
              Technology
            </a>
            <a mat-button routerLink="/vision" routerLinkActive="mat-primary">
              Vision
            </a>
            <a mat-button routerLink="/values" routerLinkActive="mat-primary">
              Values
            </a>
            <a mat-button routerLink="/join-us" routerLinkActive="mat-primary">
              Join Us
            </a>
            <a mat-button routerLink="/blog" routerLinkActive="mat-primary">
              Blog
            </a>
            <a mat-button routerLink="/contact" routerLinkActive="mat-primary">
              Contact
            </a>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex space-x-2">
              <button mat-button>EN</button>
              <span class="text-gray-400">|</span>
              <button mat-button>RU</button>
            </div>
            <button mat-stroked-button color="primary">
              LOGIN
            </button>
            <button mat-raised-button color="primary">
              Get Started
            </button>
          </div>

          <!-- Mobile menu button -->
          <button mat-icon-button [matMenuTriggerFor]="menu" class="lg:hidden">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </mat-toolbar>

    <!-- Mobile menu -->
    <mat-menu #menu="matMenu">
      <a mat-menu-item routerLink="/">Home</a>
      <a mat-menu-item routerLink="/about">About</a>
      <a mat-menu-item routerLink="/solutions">Solutions</a>
      <a mat-menu-item routerLink="/technology">Technology</a>
      <a mat-menu-item routerLink="/vision">Vision</a>
      <a mat-menu-item routerLink="/values">Values</a>
      <a mat-menu-item routerLink="/join-us">Join Us</a>
      <a mat-menu-item routerLink="/blog">Blog</a>
      <a mat-menu-item routerLink="/contact">Contact</a>
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon>login</mat-icon>
        <span>Login</span>
      </button>
    </mat-menu>
  `
})
export class HeaderComponent {}
