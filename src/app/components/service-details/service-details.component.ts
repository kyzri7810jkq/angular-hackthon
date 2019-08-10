import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  id: string;
  details: Object;
  show: boolean;

  constructor(private service: JobsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getParams()
    this.service.getJobDetail(this.id).subscribe(success => {
      this.details = success
      this.show = true
    });
  }

  getParams(){
    return this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
  }


}
