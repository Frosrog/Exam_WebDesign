import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  MarketPrice: any;
  AvgBlockSize: any;
  NTransactions: any;
  constructor(private GetData: DataService ){
    
  }
  ngOnInit(){
    this.GetData.getMarketPrice().subscribe(data => { this.MarketPrice = data.values[33].y.toFixed(2)});
    this.GetData.getAvgBlockSize().subscribe(data =>{ this.AvgBlockSize = data.values[33].y.toFixed(2)});
    this.GetData.getNTransactions().subscribe(data =>{ this.NTransactions = data.values[33].y.toFixed(0)})
  }
}
