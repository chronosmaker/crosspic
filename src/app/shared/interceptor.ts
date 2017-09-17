import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from '../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
      setParams: {'stamp': new Date().getTime().toString()}
    });
    return next.handle(req).do((ev: HttpEvent<any>) => {
      if (ev instanceof HttpResponse && !environment.production) {
        console.log('processing response', ev);
      }
    }).catch(response => {
      if (response instanceof HttpErrorResponse && !environment.production) {
        console.log('processing http error', response);
      }
      return Observable.throw(response);
    });
  }
}
