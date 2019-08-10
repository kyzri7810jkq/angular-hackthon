import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.css']
})
export class ServicesCreateComponent implements OnInit {

  serviceFrm: FormGroup = new FormGroup({
    title: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    address: new FormControl(),
    description: new FormControl(),
  });

  constructor(private service: JobsService) { }

  ngOnInit() {
  }

  submitService(){
    let data = {
      title: this.serviceFrm.get('title').value,
      image: this.serviceFrm.get('image').value,
      category: this.serviceFrm.get('category').value,
      price: this.serviceFrm.get('price').value,
      description: this.serviceFrm.get('description').value,
    } 
    this.service.postService(data).subscribe(success => {
      console.log(success);
    });    
  }
}
