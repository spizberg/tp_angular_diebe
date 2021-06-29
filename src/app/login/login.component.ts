import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  message = "Invalid Credentials"
  loginFailed = false

  constructor(
    private data: DataService, 
    private titleService: Title,
    private router: Router,
    private authentication: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.data.changeTitle("Sign in");
    this.titleService.setTitle("Login page");

    //Rediriger l'utilisateur vers liste si celui ci est connecté
    if(sessionStorage.getItem('token')){

      this.router.navigate(['list'])
    }

  }

  handleLogin() {

    
    this.authentication.login(this.username, this.password).subscribe(
      
      resp =>{
        
        this.loginFailed = false
        
        if (resp)
          this.loginFailed = false;
        else this.loginFailed = true;
    
        if (this.loginFailed) {
          console.log("Failed !!")
        }
        else {
          console.log("Success !!")
          this.router.navigate(['list'])
        }
        
      },

      error =>{

        console.log(error);
        
      }
    )



      
      
    

    
  }
}
