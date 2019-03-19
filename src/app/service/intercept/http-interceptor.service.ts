import { LocalStorage } from 'src/app/common/local.storage';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrl } from '../http-url';
import { isUndefined, isNullOrUndefined } from 'util';
import { Oauth2TokenConfig } from 'src/app/config/oauth2_config';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private ls: LocalStorage) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = this.handleToken(req);
        return next.handle(modifiedRequest);
    }

    handleToken(req: HttpRequest<any>): HttpRequest<any> {
        let modifiedHeaders = new HttpHeaders();
        modifiedHeaders = req.headers;
        let isNeedClone = false;
        if (req.url== HttpUrl.LOGIN_URL) {
            isNeedClone = true;
            modifiedHeaders = req.headers.set('Authorization', '');
        }else{
            let auth = req.headers.get('Authorization');
            if (isNullOrUndefined(auth)) {
                isNeedClone = true;
                modifiedHeaders = req.headers.set('Authorization', this.ls.get(Oauth2TokenConfig.TOKEN_TYPE) + ' ' + this.ls.get(Oauth2TokenConfig.TOKEN_ACCESS_TOKEN));
            }
        }
        return isNeedClone ? req.clone({ headers: modifiedHeaders}) : req;
    }
}