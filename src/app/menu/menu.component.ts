import { Component, OnInit,HostListener, HostBinding } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService:LoginService) {
   }
  isLogin:Boolean=false;

  ngOnInit() {
    this.loginService.change.subscribe(
      x=>this.isLogin=x
    )
  }

  logout(){
    this.loginService.logout();
  }


}
