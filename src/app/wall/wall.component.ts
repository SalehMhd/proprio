import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddPublicationDialogComponent } from '../add-publication-dialog/add-publication-dialog.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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
