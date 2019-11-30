import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { InboxComponent } from './inbox/inbox.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WallComponent } from './wall/wall.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';
import { AddPublicationDialogComponent } from './add-publication-dialog/add-publication-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InboxComponent,
    DashboardComponent,
    WallComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    AddPublicationDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [AddPublicationDialogComponent]
})
export class AppModule { }
