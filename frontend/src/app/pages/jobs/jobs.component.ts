import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobList:Job[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getJobsList();
  }

  getJobsList() {
    this.apiService.getJobs().subscribe((data: any) => {
      this.jobList = data;
    })
  }

  delete(id: any) {
    this.apiService.deleteJob(id).subscribe(data => {
      console.log(data);
      this.getJobsList();
    })  
  }

}
