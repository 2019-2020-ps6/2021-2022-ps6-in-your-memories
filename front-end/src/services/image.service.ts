import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptionsBase, serverUrl} from "../configs/server.config";
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private quizUrl = serverUrl + '/quizzes';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): void {
    this.http.post(this.quizUrl, image, this.httpOptions);
  }
}
