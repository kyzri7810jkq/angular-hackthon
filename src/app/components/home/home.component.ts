import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { JobsInterface } from 'src/app/models/Jobs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  googleAPI = 'ABQIAAAAvZMU4-DFRYtw1UlTj_zc6hT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQcT1h-VA8wQL5JBdsM5JWeJpukvw'
  jobs: Array<JobsInterface>;
  searchInput: string;
  searchFrm = new FormGroup({
    inputSearch: new FormControl('')
  });

  constructor(private service: JobsService) { }

  ngOnInit() {
    this.service.getJobs().subscribe(data => {
      this.jobs = Object.values(data)
    });
  }

  submitSearch(e) {
    e.preventDefault();
    let input = this.searchFrm.get('inputSearch');
    this.service.getJobSearch(input).subscribe(success => {
      console.log(success)
    });    
  }

}
