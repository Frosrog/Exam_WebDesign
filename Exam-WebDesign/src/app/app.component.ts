import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MarketPrice } from './Classes/market-price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
