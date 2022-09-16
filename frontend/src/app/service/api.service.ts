import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(environment.base_href + '/jobs');
  }
  getJobById(id: any) {
    return this.http.get(environment.base_href + `/jobs/${id}`);
  }

  postJob(data: Job) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(environment.base_href + '/jobs', body,{'headers':headers})
  }

  updateJob(data: Job) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.put(environment.base_href + `/jobs/${data.id}`, body,{'headers':headers})
  }

  deleteJob(id :any) : Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.delete(environment.base_href + `/jobs/${id}`,)
  }
}
