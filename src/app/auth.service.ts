import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService,) { }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('proprio-logged-in');
    // Check whether the token is expired and return
    // true or false
    return (token === '1');
  }
}
