import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  provider = {}; 
  
  
  constructor(private sprovider: ProvidersService) { }

  ngOnInit() {
  }
  submit() {
    console.log(this.provider);
    this.sprovider.addProvider(this.provider).subscribe(
      response => {
        console.log(response);
        this.provider = {}
      }
    )
  }

}