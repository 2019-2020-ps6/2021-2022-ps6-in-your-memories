import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";
import {ImageService} from "../../../services/image.service";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file

  // Inject service
  constructor(private fileUploadService: ImageService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: Event) {
    // @ts-ignore
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload({file: this.file}).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
  }
}
