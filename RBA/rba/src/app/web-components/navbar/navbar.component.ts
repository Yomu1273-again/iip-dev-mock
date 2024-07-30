import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Console } from 'console';
import { AuthServiceService } from '../../core/services/auth-service/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

  constructor(@Inject(DOCUMENT) private document: any,private authService: AuthServiceService) {}

  element:any;

  ngOnInit(): void {
    this.element = this.document.querySelector('modus-navbar');
    if (this.element) {
      this.element.apps = [
      {
        description: 'Display Options',
        logoUrl: 'https://modus.trimble.com/favicon.svg',
        name: 'View Settings',
        url: 'https://modus.trimble.com/',
      },
      ];
    }
  this.element.logoOptions = {
    primary: {
      url: 'https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg',
      height: 24,
    },
    secondary: { url: 'https://modus.trimble.com/favicon.svg', height: 24 },
  };
  this.element.profileMenuOptions = {
    avatarUrl: 'https://avatar.example.com/broken-image-link.png',
    email: 'modus_user@trimble.com',
    initials: 'MU',
    signOutText: 'Sign out',
    username: 'Modus User'
  };

  window.addEventListener('profileMenuSignOutClick', () => {
    console.log('Sign out clicked');
    this.authService.logout();
  });
  }

  appsMenuAppOpen() {
    window.alert("apps menu app open");
  }
}
