import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}