import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MarketPrice } from './Classes/market-price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  result: any;
  a = new MarketPrice()
  constructor(private ShowMarketPrice: DataService ){
    
  }
  ngOnInit(){
    this.ShowMarketPrice.getMarketPrice().subscribe(data => { this.result = data});
  }
  }
