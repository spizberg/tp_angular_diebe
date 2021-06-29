import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sale-ad-list',
  templateUrl: './sale-ad-list.component.html',
  styleUrls: ['./sale-ad-list.component.scss']
})
export class SaleAdListComponent implements OnInit {

  response : String
  saleAdList : [] = []
  constructor(
    private data: DataService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.data.changeTitle("Sale Ad List")
    this.titleService.setTitle("Sale Ad List Page")

    this.onFetchSaleAd()
  }

  onFetchSaleAd(){
    this.data.fetchSaleAd().subscribe(

      (resp : [])=>{

        this.saleAdList = resp;
        console.log(resp);
        
        
      },
      (error)=>{

        console.log(error);
        
      }
      
    )
  }

  handleDeleteSuccess(resp){

    if(resp){
      this.onFetchSaleAd();
    }
    
  }

}
