import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // getJobs() {
  //   return this.http.get(environment.base_href + '/jobs');
  // }
  // getJobById(id: any) {
  //   return this.http.get(environment.base_href + `/jobs/${id}`);
  // }

  getHttp(endPoint: any, params?: any) : Observable<any> {
    let data  = {params};
    return this.http.get(environment.base_href + endPoint, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  postHttp(endpoint: any, data: Job) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(environment.base_href + endpoint, body,{'headers':headers}).pipe(catchError(this.errorHandler.bind(this)));
  }

  updateHttp(endpoint: any,data: Job) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.put(environment.base_href + endpoint, body,{'headers':headers}).pipe(catchError(this.errorHandler.bind(this)));
  }

  deleteHttp(endpoint: any) : Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.delete(environment.base_href + endpoint).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      // auth token delete
      // redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({messages: message, error});
  }
}
