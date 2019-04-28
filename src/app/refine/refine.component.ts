import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Namebool, allSkills, allLocations } from '../namebool';
import { DDoptions, allDdoptions } from '../ddoptions';



@Component({
  selector: 'app-refine',
  templateUrl: './refine.component.html',
  styleUrls: ['./refine.component.css']
})
export class RefineComponent implements OnInit {

  @Output() sendData= new EventEmitter;
  @Output() sendLoc= new EventEmitter;
  @Output() sendDays = new EventEmitter;

  skills:Namebool[]=allSkills;
  locations:Namebool[]=allLocations;
  ddoption:DDoptions[]=allDdoptions;
  option:string="Last 60 days";


  skillFilter(){
    let filterSkill=this.skills.filter(item =>item.value==true)
    .map(element=>element.name);
    this.sendData.emit(filterSkill);
    console.log("child",filterSkill)

  }
  locationFilter(){
    let filterLocation=this.locations.filter(item=>item.value==true)
    .map(element => element.name);
    this.sendLoc.emit(filterLocation);
  }

  findValue(){
      let value = this.ddoption.find(item =>item.display==this.option);
      let values = value.selValue;
      this.sendDays.emit(values);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
