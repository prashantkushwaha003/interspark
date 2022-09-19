import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/model';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getAllJobs(): Observable<Job[]> {
    return this.httpService.getHttp('/jobs')
      .pipe(map(data => data as Job[]));
  }
  getJobById(id: any): Observable<Job> {
    return this.httpService.getHttp(`/jobs/${id}`);
  }
  newJob( data: Job) : Observable<Job> {
    return this.httpService.postHttp('/jobs', data);
  }

  updateJob(id: any,data: Job) : Observable<any> {
    return this.httpService.updateHttp(`/jobs/${id}`, data);
  }

  deleteJob(id: any) : Observable<any> {
    return this.httpService.deleteHttp(`/jobs/${id}`);
  }

}
