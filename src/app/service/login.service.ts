import { Injectable, Output ,EventEmitter} from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  @Output() loginChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public is_login=false;

  constructor() { }

  isLogin():Promise<boolean>{
    const isAuth=new Promise<boolean>(
      (resolve,reject)=>{
        resolve(this.is_login);
      }
    )
    return isAuth;
  }

  login(username:string,password:string):boolean{
    //if (username==="mehdi" && password==="mehdi") {
      this.is_login=true;
      this.loginChanged.emit(this.is_login);
    //}
    return this.is_login;
  }

  logout(){
    this.is_login=false;
    this.loginChanged.emit(this.is_login);
  }
}
