import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.isAuthenticated(next)) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}