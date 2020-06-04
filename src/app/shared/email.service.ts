import { Injectable } from '@angular/core';
import { Email } from '../email.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  readonly rootURL = 'https://mycvbackend.azurewebsites.net/api';
  //formData:Email;


  constructor(private http:HttpClient) { }
  postEmail(formData:Email){
    console.log("Hey");
    formData.EML_ID=0;
    console.log(formData);

  return this.http.post(this.rootURL+'/EMAILs',formData);
  }
  
   
}
