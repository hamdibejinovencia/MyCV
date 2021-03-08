import { Injectable } from '@angular/core';
import { Email } from '../email.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  readonly rootURL = 'https://mycvbackend.azurewebsites.net/api';
  //readonly rootURL = 'https://localhost:44374/api';
  //formData:Email;


  constructor(private http:HttpClient) { }
  postEmail(formData:Email){
  return this.http.post(this.rootURL+'/EMAILs',formData);
  }
  
   
}
