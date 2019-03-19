import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { UserVO } from 'src/app/entity/UserVO';
import { LocalStorage } from 'src/app/common/local.storage';
import { Oauth2Config } from 'src/app/config/oauth2_config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }
  title = 'OldClassmateFront';
  user: UserVO = new UserVO();
  constructor(private httpService:HttpService, private ls:LocalStorage, private router: Router){

  }

  login(){
    this.logout();
    const formData = new FormData();
    formData.append('client_id',Oauth2Config.OAUTH2_CLIENT_ID);
    formData.append('client_secret',Oauth2Config.OAUTH2_CLIENT_SECRET);
    formData.append('grant_type',Oauth2Config.OAUTH2_GRANT_TYPE);
    formData.append('scope',Oauth2Config.OAUTH2_SCOPE);
    formData.append('username',this.user.name);
    formData.append('password',this.user.password);
    this.httpService.login(formData).subscribe(
      data=>{
        this.ls.set('access_token', data['access_token']);
        this.ls.set('refresh_token', data['refresh_token']);
        this.ls.set('expires_in', data['expires_in']);
        this.ls.set('token_type', data['token_type']);
        this.router.navigate(['/dashboard']);
      },
      error=>{
        console.log(error);
      }
    );
  }

  logout(){
    this.ls.removeAll();
  }
}
