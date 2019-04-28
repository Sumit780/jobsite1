import { Component,OnInit } from '@angular/core';
import { JobDetails, allJobDetail } from './job-details';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobsiteOne'
  jobDetail:JobDetails[]=allJobDetail;
  allJobs:any=[];
  allLoc:any=[];


  newChange(value:string){
       console.log("value",value);
       if(value.length>0){
       let arr=[];
          for(let i=0;i<value.length;i++){
            arr=arr.concat(this.jobDetail.filter(item =>item.techarea==value[i]))
          }
        this.allJobs=arr;
        console.log(this.allJobs)
        }else{
        this.allJobs=this.jobDetail;
      }
    }

  nextChange(loc:string){
      console.log("valueloc",loc)
      if(loc.length>0){
      let arr=[];
      for(let i=0;i<loc.length;i++){
          arr=arr.concat(this.allJobs.filter(item=>item.city==loc[i]))
        }
      this.allLoc=arr;
      this.allJobs=[];
      this.allJobs=this.allLoc;
     }
    }

  dropDownChange(day:number){
    console.log(day)
      let arr1=[];
          arr1=this.jobDetail.filter(item=>item.when<=day); 
      this.allJobs=arr1;
  }


  ngOnInit() {
    this.allJobs=this.jobDetail;
  }
}
