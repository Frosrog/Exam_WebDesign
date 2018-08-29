import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPrice } from './Classes/market-price';
import { AvgBlockSize } from './Classes/avg-block-size';
import { NTransactions } from './Classes/n-transactions';
import { MempoolSize } from './Classes/mempool-size';
import { Minados } from './Classes/minados';
import { Companies } from './Classes/companies';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  constructor(private _http: HttpClient) {}
  //Call each one of the blocks from the api
  MARKET_PRICE= 'https://api.blockchain.info/charts/market-price?timespan=5weeks&rollingAverage=8hours&format=json'
  AVG_BLOCK_SIZE='https://api.blockchain.info/charts/avg-block-size?timespan=5weeks&rollingAverage=8hours&format=json'
  N_TRANSACTIONS='https://api.blockchain.info/charts/n-transactions?timespan=5weeks&rollingAverage=8hours&format=json'
  MEMPOOL = 'https://api.blockchain.info/charts/mempool-size?timespan=5weeks&rollingAverage=8hours&format=json'
  MINADOS = 'https://api.blockchain.info/stats'
  COMPANIES = 'https://api.blockchain.info/pools?timespan=5days'
  getMarketPrice(){
    return this._http.get<MarketPrice>(this.MARKET_PRICE);
  }
  getAvgBlockSize(){
    return this._http.get<AvgBlockSize>(this.AVG_BLOCK_SIZE);
  }
  getNTransactions(){
    return this._http.get<NTransactions>(this.N_TRANSACTIONS);
  }
  getMempool(){
    return this._http.get<MempoolSize>(this.MEMPOOL);
  }
  getMinados(){
    return this._http.get<Minados>(this.MINADOS);
  }
  getCompanies(){
    return this._http.get<Companies>(this.COMPANIES);
  }
   }
