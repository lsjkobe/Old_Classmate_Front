import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ngOnInit(): void {
  }
  uploadProgress: number = 0;

  constructor(public http: HttpClient) { }

  upload(file: HTMLInputElement) {
    if (file.value.length === 0) {
      return;
    }
    const files: FileList = file.files
    const fileLength = files.length;
    const formData: FormData = new FormData();
    for (let index = 0; index < fileLength; index++) {
      const singleFile = files.item(index);
      // files 这个名字和spring mvc controller参数的名字要对应
      formData.append('files', singleFile);
    }

    const url = 'api/v1/upload/file';
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });

    this.http.request(req).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('Files uploaded!');
        }
      },

      data => {
        console.log('Files uploaded!');
      });
    // this.http.post(url, formData, {headers: headers}).subscribe(data => {
    //   console.log(data);
    // });
  }


}
