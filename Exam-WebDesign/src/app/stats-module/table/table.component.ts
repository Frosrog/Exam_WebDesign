import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private GetData: DataService ) { }
  BitCompanies: any;
  ViaBTC: any;
  ngOnInit() {
    this.GetData.getCompanies().subscribe(data => {this.BitCompanies = data
      this.BitCompanies.BTC = data["BTC.com"];
      this.BitCompanies.BTCC = data["BTCC Pool"]
      this.BitCompanies.BTCTOP = data["BTC.TOP"]
      this.BitCompanies.BitClubNetwork = data["BitClub Network"]
      this.BitCompanies.Bitcoincom = data["Bitcoin.com"]
      this.BitCompanies.COIN = data["58COIN"]
      this.ViaBTC = data["ViaBTC"];
    })


  }

}
