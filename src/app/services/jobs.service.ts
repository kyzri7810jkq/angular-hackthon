import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobsInterface } from '../models/Jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  URL = 'https://ngjuan-edc96.firebaseio.com/jobs'
  URL_JSON = 'https://ngjuan-edc96.firebaseio.com/jobs.json'
  details = 'https://ngjuan-edc96.firebaseio.com/jobs/-LhU6WoEIEY4oViYaoH7.json'

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobsInterface[]>{
    return this.http.get <JobsInterface[]>(this.URL + '.json')
  }

  getJobDetail(id: any): Observable<JobsInterface>{
    let url = this.URL + '/' + id + '.json';
    return this.http.get <JobsInterface>(url);
  }

  getJobSearch(input: any): Observable<JobsInterface>{
    let params = {title: 'fence painting'};
    console.log(params)
    return this.http.get<JobsInterface>(this.URL_JSON, {params});
  }

  postService(input): Observable<JobsInterface>{
    return this.http.post<JobsInterface>(this.URL_JSON,  input);
  }
}
