import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NewJobsComponent } from './pages/new-jobs/new-jobs.component';

const routes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'jobs/new-job',
    component: NewJobsComponent
  }, 
  {
    path: 'jobs/:id',
    component: JobDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'jobs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
