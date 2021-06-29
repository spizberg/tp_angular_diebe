import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { SaleAd } from '../model/salead'

declare var $ : any;

@Component({
  selector: 'app-sale-ad-edit',
  templateUrl: './sale-ad-edit.component.html',
  styleUrls: ['./sale-ad-edit.component.scss']
})
export class SaleAdEditComponent implements OnInit {

  saleAd : SaleAd
  @ViewChild('fileInput',{static: true}) fileInput: ElementRef;

  urlFileToSave ;

  listOfUrlToView : String[] = [];


  illustration = [];

   img = new Image;

  constructor(private route : ActivatedRoute,
              private dataService : DataService,
              private router : Router) { }


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
      this.onFetchSaleAd(id) ;
    })
  }

  onFetchSaleAd(id){
    this.dataService.fetchSaleAdById(id).subscribe(

      (resp : any)=>{

        console.log(resp);
        this.saleAd = resp ;
      },
      (error)=>{

        console.log(error);
        
      }
    )
  }

  onModify(){

    console.log(this.illustration);
    

    var body = new FormData();
    body.append('idSaleAd', this.saleAd.id.toString());
    body.append('title', this.saleAd.title.toString());
    body.append('description', this.saleAd.description.toString());
    body.append('price', this.saleAd.price.toString())
    for(let illustration of this.illustration ){
      body.append('file', illustration, illustration.name);

    }

  /*  var body = {

      id : this.saleAd.id,
      title: this.saleAd.title,
      description :this.saleAd.description,
      price : this.saleAd.price,
      
    }
    
   
    */

   this.dataService.updateSaleAdWhithFile(body).subscribe(

    (resp)=>{

      alert('Update successful')
      this.router.navigate(['list'])
    },
    (error)=>{

      console.log(error);
      
    }
  )
  }

  onFileChange(event){

    if(event.target.files.length > 0) {
     
      //Sauvegarde de l'image dans illustration
      this.illustration = Array.from(event.target.files);
      this.listOfUrlToView = [];


      for(let i =0; i< event.target.files.length; i++){
        let reader = new FileReader() ;

        //Apercu
        reader.onload = (event) => {
          this.urlFileToSave = reader.result ;
          this.listOfUrlToView.push(this.urlFileToSave);
        }
        reader.readAsDataURL(event.target.files[i]); 
      }
       
      
  }
}

previousImage(){
  
  $('.carousel').carousel('prev');
}

nextImage(){
  
  $('.carousel').carousel('next');
}


deleteUrlToList(i){

  this.listOfUrlToView.splice(i, 1 );
  console.log(typeof this.listOfUrlToView);
  this.illustration.splice(i, 1);
  console.log(this.illustration);
  

  
  
}
}
