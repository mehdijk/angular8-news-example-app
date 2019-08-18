import { Component, OnInit,HostListener, HostBinding } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService:LoginService,
              private route:ActivatedRoute,
              private router:Router) {
   }
  isLogin:Boolean=false;

  ngOnInit() {
    this.loginService.loginChanged.subscribe(
      x=>this.isLogin=x
    )
  }

  logout(){
    const url:string=this.route.snapshot['_routerState'].url;
    //is url contain Add or Edit
    const count:number=url.split('/').filter(x=>x==="edit" || x==="add").length;
    this.loginService.logout();
    if (count>=1){
      this.router.navigate(['/home']);
    }

  }


}
