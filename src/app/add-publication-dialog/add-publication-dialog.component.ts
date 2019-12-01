import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-publication-dialog',
  templateUrl: './add-publication-dialog.component.html',
  styleUrls: ['./add-publication-dialog.component.scss']
})
export class AddPublicationDialogComponent implements OnInit {

  public publicationTextContent: string = "";
  public imageDownloadURL: string = "";

  constructor(
    private dialogRef: MatDialogRef<AddPublicationDialogComponent>,
    private db: AngularFirestore
    //@Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit() {
  }

  onUploadCompleted(downloadURL: string) {
    this.imageDownloadURL = downloadURL;
  }

  addPublicationBtnClicked() {
    console.log(this.publicationTextContent);
    console.log(this.imageDownloadURL);
    this.db.collection("/publications").add({
      'PhotoUrl': this.imageDownloadURL,
      'TextContent': this.publicationTextContent
    }).then( res => {
      console.log(res);
    }
    );
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}