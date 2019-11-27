//Source: https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // Main task
  task: AngularFireUploadTask;

  // Progress monitor
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The file object
    const file = event.item(0);

    // Client side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
      return;
    }

    // The storage path
    const path = `proprio/${new Date().getTime()}_${file.name}`;
    
    // Totally optional metadata
    const customMetadata = {app: 'proprio'};

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
    const ref = this.storage.ref(path);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    
    // https://stackoverflow.com/questions/50541836/property-downloadurl-does-not-exist-on-type-angularfireuploadtask
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if(snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection('photos').add( { path, size: snap.totalBytes })
        }
      })
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
