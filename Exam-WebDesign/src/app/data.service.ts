import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPrice } from './Classes/market-price';
import { AvgBlockSize } from './Classes/avg-block-size';
import { NTransactions } from './Classes/n-transactions';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  constructor(private _http: HttpClient) {}
  MARKET_PRICE= 'https://api.blockchain.info/charts/market-price?timespan=5weeks&rollingAverage=8hours&format=json'
  AVG_BLOCK_SIZE='https://api.blockchain.info/charts/avg-block-size?timespan=5weeks&rollingAverage=8hours&format=json'
  N_TRANSACTIONS='https://api.blockchain.info/charts/n-transactions?timespan=5weeks&rollingAverage=8hours&format=json'
  getMarketPrice(){
    return this._http.get<MarketPrice>(this.MARKET_PRICE);
  }
  getAvgBlockSize(){
    return this._http.get<AvgBlockSize>(this.AVG_BLOCK_SIZE);
  }
  getNTransactions(){
    return this._http.get<NTransactions>(this.N_TRANSACTIONS);
  }
   }
