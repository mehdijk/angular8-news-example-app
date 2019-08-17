import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
  }

  onLoginClick(username:string,password:string){
    if(this.loginService.login(username,password)){
      this.router.navigate(['/home']);
    }
  }

  onCancelClick(){
    this.router.navigate(['/home']);
  }
}
