import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proprio';

  constructor(private cookieService: CookieService, public auth: AuthService, private router: Router) { }

  logout() {
    console.log(this.cookieService.get('proprio-logged-in'));
    this.cookieService.set('proprio-logged-in','0');
    this.router.navigateByUrl('/login');
  }
}
