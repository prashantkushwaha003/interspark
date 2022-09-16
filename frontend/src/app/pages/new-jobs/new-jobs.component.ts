import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-jobs',
  templateUrl: './new-jobs.component.html',
  styleUrls: ['./new-jobs.component.scss']
})
export class NewJobsComponent implements OnInit {
  @Input() jobDetail: any; 
  form: Job = {
    id: Math.random(),
    job_number: '',
    job_title: '',
    job_start_date: null,
    job_close_date:  null,
    experience_required: true,
    number_of_openings: 0,
    job_notes: ''
  }
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.form,  this.jobDetail);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.jobDetail ? this.form = changes['jobDetail'].currentValue : '';
	}


  onSubmit() {
    this.apiService.postJob(this.form).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/');
    })      
  }

  update() {
    this.apiService.updateJob(this.form).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/');
    })      
  }

}
