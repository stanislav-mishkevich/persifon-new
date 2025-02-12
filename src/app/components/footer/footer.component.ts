import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Persifon</h3>
            <p class="text-gray-400">Pioneering the Future of Finance and Education</p>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">Quick Links</h4>
            <div class="flex flex-col space-y-2">
              <a mat-button color="basic" routerLink="/" class="text-gray-400 hover:text-white text-left">Home</a>
              <a mat-button color="basic" routerLink="/about" class="text-gray-400 hover:text-white text-left">About</a>
              <a mat-button color="basic" routerLink="/solutions" class="text-gray-400 hover:text-white text-left">Solutions</a>
              <a mat-button color="basic" routerLink="/technology" class="text-gray-400 hover:text-white text-left">Technology</a>
            </div>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">Company</h4>
            <div class="flex flex-col space-y-2">
              <a mat-button color="basic" routerLink="/vision" class="text-gray-400 hover:text-white text-left">Vision</a>
              <a mat-button color="basic" routerLink="/values" class="text-gray-400 hover:text-white text-left">Values</a>
              <a mat-button color="basic" routerLink="/join-us" class="text-gray-400 hover:text-white text-left">Join Us</a>
              <a mat-button color="basic" routerLink="/blog" class="text-gray-400 hover:text-white text-left">Blog</a>
            </div>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">Legal</h4>
            <div class="flex flex-col space-y-2">
              <a mat-button color="basic" href="#" class="text-gray-400 hover:text-white text-left">Privacy Policy</a>
              <a mat-button color="basic" href="#" class="text-gray-400 hover:text-white text-left">Terms of Use</a>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Persifon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}