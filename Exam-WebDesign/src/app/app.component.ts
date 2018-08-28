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
  price : any;
  constructor(private ShowMarketPrice: DataService ){
    this.ShowMarketPrice.getMarketPrice().subscribe(data => { this.result = data.values });
    this.price = this.result.values;
    
    ;
  }
  ngOnInit(){}
  }
