import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

declare var $: any;

@Component({
  selector: 'app-sale-ad-show',
  templateUrl: './sale-ad-show.component.html',
  styleUrls: ['./sale-ad-show.component.scss']
})
export class SaleAdShowComponent implements OnInit {

  

  saleAd =  {
    title: String,
    price : String,
    description : String,
    illustrations : [],
    dateCreated : Date
  }

  constructor(private route : ActivatedRoute,
            private dataService : DataService) { }

  ngOnInit(): void {

    this.getURLParams();

  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    $('.carousel').carousel({
      interval: 1000
    })
  }


  getURLParams(){
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      this.onShowSaleAd(id);
      
    })
  }


  onShowSaleAd(id){

    this.dataService.fetchSaleAdById(id).subscribe(
      (resp : any)=>{

        console.log(resp);
        this.saleAd = resp;
        this.dataService.changeTitle(resp.title)

        
      },
      (error)=>{

        console.log(error);
        
      }
    )
  }

  previousImage(){
  
    $('.carousel').carousel('prev');
  }
  
  nextImage(){
    
    $('.carousel').carousel('next');
  }

}
