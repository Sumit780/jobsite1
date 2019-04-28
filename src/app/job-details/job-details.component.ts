import { Component, OnInit, Input } from '@angular/core';
import { JobDetails, allJobDetail } from '../job-details';



@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

 @Input()  allJobs:JobDetails;
  constructor() { }

  ngOnInit() {
  }

}
