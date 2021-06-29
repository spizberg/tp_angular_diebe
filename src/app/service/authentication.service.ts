import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { API } from '../api';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  isAuthenticated = new Subject();
  isAuthenticatedObservable = this.isAuthenticated.asObservable();


  login(username, password) : Observable<Boolean>

   //return true;
    // Soumettre les identifiants au service de login (http://localhost:8081/api/login - POST) > doLogin
    // Login est valide
      // Enregistrer en session (SessionStorage) le token de l'utilisateur
      // On informe l'appellant que l'utilisateur est authentifié et qu'il faut le rediriger sur la page appropriée
    // Login n'est pas valide
      // Informer l'appellant que l'utilisateur n'est pas authentifié

  {

    return new Observable(observer =>{

      this.doLogin(username, password).subscribe(

        (resp)=>{
  
          if(resp.access_token){
  
            let token = resp.access_token;
            sessionStorage.setItem(config.KEY_WORD_TOEKN, token) ;
            
            this.isAuthenticated.next(true)
            observer.next(true)
          }else{
           // this.authenticated.next(false)
            observer.next(false)
          }
        },
        (error)=>{
  
          console.log(error);
          observer.next(false)

          
        }
      )
    })    
  }

  doLogin(username, password) : Observable<any>
  {
    // Fait l'appel au service distant 
    // Va récupérer le token si login valide
    // Retourner l'info à l'appellant (login)

    var body = {
      username : username,
      password : password
    }

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Accept', 'application/json');
    

    return this.http.post(API.login, body,{  headers : headers
    }
    )
  }

  isUserLoggedIn()
  {
    // Récupérer le token dans le session storage (s'il y en a un)
    // Si token, alors on considère l'utilisateur comme étant authentifié
    // Sinon non

    if(sessionStorage.getItem(config.KEY_WORD_TOEKN) != null){
      this.isAuthenticated.next(true)
    }else{
      return this.isAuthenticated.next(false);
    }
  }

  logout()
  {
    // On efface le token dans le session storage
    // On confirme le logout au composant appellant qui devra rediriger l'utilisateur sur la page appropriée 
    sessionStorage.removeItem(config.KEY_WORD_TOEKN)
    this.isAuthenticated.next(false)
    return true
  }
}
