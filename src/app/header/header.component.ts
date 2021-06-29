import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "Title"
  
  isAuthenticated : Boolean = false;

  constructor(private data: DataService,
              private authenticationService : AuthenticationService,
              private router : Router) { }

  ngOnInit(): void {
    this.data.currentTitle.subscribe(title => this.title = title)
    this.authenticationService.isAuthenticatedObservable.subscribe(

      (resp : Boolean)=>{

        console.log(resp);
        
        this.isAuthenticated = resp
      }
    )
    this.isLogin()
  }

  isLogin() {

    this.authenticationService.isUserLoggedIn();
  }

  handleLogout(){
    if(this.authenticationService.logout()){
      this.router.navigate([''])
    }
  }

}
