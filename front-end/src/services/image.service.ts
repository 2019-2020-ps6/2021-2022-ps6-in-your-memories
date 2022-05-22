import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptionsBase, serverUrl} from "../configs/server.config";
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseApiUrl = ""

  constructor(private http:HttpClient) { }

  // Returns an observable
  upload({file}: { file: any }):Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }
}
