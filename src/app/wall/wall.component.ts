import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddPublicationDialogComponent } from '../add-publication-dialog/add-publication-dialog.component';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  public publications: any[];

  constructor(private dialog: MatDialog, private db: AngularFirestore) { }

  ngOnInit() {
    const users = this.db.collection('/publications').valueChanges().subscribe(pubs => {
      this.publications = pubs;
    });
  }

  addPublicationBtnClicked() {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //pass data to the dialog
    // dialogConfig.data = {
    //   pubId: "",
    //   pubImageURL: "",
    //   pubTextContent: ""
    // }

    this.dialog.open(AddPublicationDialogComponent, dialogConfig);
  }
}
