import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Result} from "../Models/result";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
   private url:string ='http://amlakapi.nicode.org/City/GetProviences';

  constructor(  private http: HttpClient) { }
  public  getProduct(): Observable<Result> {
    return this.http.get<Result>(this.url);
  }




}
