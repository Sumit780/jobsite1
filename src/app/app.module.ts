import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { RefineComponent } from './refine/refine.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RightPanelComponent } from './right-panel/right-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    RefineComponent,
    TopBarComponent,
    RightPanelComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
