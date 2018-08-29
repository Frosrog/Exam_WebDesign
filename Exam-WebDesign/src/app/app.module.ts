import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './dashboard/info/info.component';
import { StatsComponent } from './stats-module/stats/stats.component';
import { ExtractInfoComponent } from './graphics-module/extract-info/extract-info.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { TableComponent } from './stats-module/table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StatsComponent,
    ExtractInfoComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
