import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  jobDetail:Job = {
    id: 0,
    job_number: '',
    job_title: '',
    job_start_date: null,
    job_close_date:  null,
    experience_required: false,
    number_of_openings: 0,
    job_notes: ''
  };
  id: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.apiService.getJobById(this.id).subscribe((data: any) => {
      this.jobDetail = data;
      console.log(data);
    })
  }

}
