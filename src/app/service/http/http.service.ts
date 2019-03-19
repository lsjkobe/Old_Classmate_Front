import { UserVO } from 'src/app/entity/UserVO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpUrl } from '../http-url';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  login(param: FormData){
    // return this.http.post(this.loginUrl, param,{headers:new HttpHeaders({
    //   // BasicAuthenticationFilter中的doFilterInternal会拿到Authorization并且判断是否为空或者是否是"basic "开头，如果是不是空并且是"basic "开头，那么会发生一些错误
    //   // 但似乎httpclient的请求会有Authorization：Basic Og==，由于登录时不需要Authorization，所以手动设置为空
    //   'Authorization':'123'
    // })});
    return this.http.post(HttpUrl.LOGIN_URL, param);
  }

  create(param: UserVO){
    return this.http.post<UserVO>(HttpUrl.CREATE_URL, param);
  }

  getSchoolfellowById(){
    return this.http.get(HttpUrl.CONFIGRL_URL);
  }
}
