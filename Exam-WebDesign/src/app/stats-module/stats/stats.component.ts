import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private GetData: DataService ) { }
  BlocksMined: any;
  minados: any;
  MinutesBetweenBlocks: number;
  Minutes: any;
  VolumenUSD: any;
  VolumenUSD2: any;
  estimated_transaction_volume_usd: any;
  miners_revenue_usd:any;
  n_btc_mined: any;
  market_price_usd: any;
  
  
  ngOnInit() {
    this.GetData.getMinados().subscribe(data => {this.minados = data
    this.BlocksMined = data['n_blocks_mined'];
    this.MinutesBetweenBlocks=data['minutes_between_blocks']
    this.Minutes = (this.MinutesBetweenBlocks.toFixed(2))
    this.VolumenUSD = (data["trade_volume_usd"].toFixed(2));
    this.estimated_transaction_volume_usd = (data["estimated_transaction_volume_usd"].toFixed(2));
    this.miners_revenue_usd = (data["miners_revenue_usd"].toFixed(2));
    this.n_btc_mined = data["n_btc_mined"];
    this.market_price_usd = data["market_price_usd"]

  })
    
  }

}
