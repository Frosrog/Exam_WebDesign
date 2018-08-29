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
  Mempool: any
  constructor(private GetData: DataService ){
    
  }
  //Load the API Data to the classes, for show them, just have to write eachone in the html
  ngOnInit(){
    this.GetData.getMarketPrice().subscribe(data => { this.MarketPrice = data.values[33].y.toFixed(2)});
    this.GetData.getAvgBlockSize().subscribe(data =>{ this.AvgBlockSize = data.values[33].y.toFixed(2)});
    this.GetData.getNTransactions().subscribe(data =>{ this.NTransactions = data.values[33].y.toFixed(0)})
    this.GetData.getMempool().subscribe(data => {this.Mempool = data.values[33].y.toFixed(0)})
  }
}
