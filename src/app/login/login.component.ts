import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor(private cookieService: CookieService, private router: Router, private db: AngularFirestore) { }

  ngOnInit() {
  }

  onLoginBtnClicked() {
    const users = this.db.collection('/users').valueChanges().subscribe(u => {
      const user = u.filter( us => (us as any).username === this.username && (us as any).password === this.password);
      if(user.length > 0) {
        console.log("login");
        this.cookieService.set('proprio-logged-in', '1');
        this.router.navigateByUrl("/home");
      }
    });
    console.log(this.username);
    console.log(this.password);
  }
}
