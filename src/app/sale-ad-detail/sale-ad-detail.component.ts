import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../config';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sale-ad-detail',
  templateUrl: './sale-ad-detail.component.html',
  styleUrls: ['./sale-ad-detail.component.scss']
})
export class SaleAdDetailComponent implements OnInit {

  imageDirectory = config.imageDirectory;

  @Input() saleAd = {
    title: String,
    description : String,
    price : Number  ,
    lastUpdated : Date,
    illustrations : []
  }

  @Output() deleteOutPutSucess = new EventEmitter<any>();

  constructor(private dataService : DataService,
              private router : Router) { }

  ngOnInit(): void {
  }


  onModifySaleAd(saleAd){


    this.router.navigate(['edit' + '/' + saleAd.id]);

  }


  onCheckDetails(saleAd){

    this.router.navigate(['/show/' + saleAd.id])
  }

  onDeleteSaleAd(saleAd){

    this.dataService.deleteSaleAd(saleAd.id).subscribe(

      (resp)=>{

        console.log(resp);
        alert("Delete successful !")
        this.deleteOutPutSucess.emit(true);

      },

      (error)=>{

        console.log(error);
        
      }
    )
  }


}
