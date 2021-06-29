import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {API} from '../api'
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private titleSource = new BehaviorSubject('Default Title')
  currentTitle = this.titleSource.asObservable();

  constructor(private httpClient : HttpClient) { }

  changeTitle(title:string)
  {
    this.titleSource.next(title)
  }

  fetchSaleAd(){

    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json')
                     .set('Authorization', 'Bearer ' + sessionStorage.getItem(config.KEY_WORD_TOEKN))
                     .set('Content-type', 'application/json')
    return this.httpClient.get(API.saleAds,{ headers : headers})
  }


  fetchSaleAdById(id : number){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json')
                     .set('Authorization', 'Bearer ' + sessionStorage.getItem(config.KEY_WORD_TOEKN))
                     .set('Content-type', 'application/json')
    return this.httpClient.get(API.saleAd + '/' + id,{ headers : headers})
  }

  deleteSaleAd(id : number){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json')
                     .set('Authorization', 'Bearer ' + sessionStorage.getItem(config.KEY_WORD_TOEKN))
                     .set('Content-type', 'application/json')
    return this.httpClient.delete(API.saleAd + '/' + id,{ headers : headers})
  }

  updateSaleAd(saleAd){


    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json')
                     .set('Authorization', 'Bearer ' + sessionStorage.getItem(config.KEY_WORD_TOEKN))
                     .set('Content-type', 'application/json')
    return this.httpClient.put(API.saleAd + '/' + saleAd.id, saleAd,{ headers : headers})

  }

  updateSaleAdWhithFile(saleAd : FormData){


    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json')
                     .set('Authorization', 'Bearer ' + sessionStorage.getItem(config.KEY_WORD_TOEKN))
    return this.httpClient.post(API.saleAds, saleAd,{ headers : headers})

  }



}

