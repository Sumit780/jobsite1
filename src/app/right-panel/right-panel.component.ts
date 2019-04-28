import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
   
  imgArray:string[]=['https://i.imgur.com/CU8Xoqm.gif','https://i.imgur.com/Z1Sl7hX.gif',
  'https://i.imgur.com/MlqXSWv.gif','https://i.imgur.com/vfl9Hze.gif',
  'https://i.imgur.com/DZk7ie3.gif','https://i.imgur.com/vEuBmdo.gif',
  'https://i.imgur.com/lfpCwTC.gif',
  'https://i.imgur.com/CU8Xoqm.gif','https://i.imgur.com/4wvF2BX.gif',
  'https://i.imgur.com/ZSXLf0G.gif','https://i.imgur.com/NZ4w63x.gif','https://i.imgur.com/Mj6EgTh.gif']
     
  constructor() { }

  ngOnInit() {
  }

}
