import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from './config';
import { AuthenticationService } from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private router : Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    
      if(sessionStorage.getItem(config.KEY_WORD_TOEKN) == null){
       
       this.router.navigate(['/'])
       alert('Permission denied')
        
        
      }
   
      return true;
  }
  
}
