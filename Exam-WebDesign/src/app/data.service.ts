import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPrice } from './Classes/market-price';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  constructor(private _http: HttpClient) {}
  MARKET_PRICE= 'https://api.blockchain.info/charts/market-price?timespan=5weeks&rollingAverage=8hours&format=json'
  getMarketPrice(){
    return this._http.get<MarketPrice>(this.MARKET_PRICE);
  }
   }
