import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      return this.router.parseUrl('/login');
    }
    return true;
  }
}
