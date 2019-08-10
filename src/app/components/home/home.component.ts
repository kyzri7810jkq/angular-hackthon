import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { JobsInterface } from 'src/app/models/Jobs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Array<JobsInterface>;

  constructor(private service: JobsService) { }

  ngOnInit() {
    this.service.getJobs().subscribe(data => {
      this.jobs = Object.values(data)
      console.log(this.jobs)
    });
  }

  SearchFrm() {
    
  }

}
