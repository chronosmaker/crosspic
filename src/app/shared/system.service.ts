import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SystemService {

  systemInfo = {
    site: 'chronos.red',
    menu: {
      home: {title: 'home', url: '/home'},
      crosspic: {title: '{crosspic}', url: '/crosspic'}
    }
  };
  headerBtns: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
  }

  // private handleError(error: any) {
  //   console.error('error catched', error);
  //   return Observable.of({description: 'Error Value Emitted'});
  // }

  // post(data): Observable<any> {
  //   return this.http.post('/', JSON.stringify(data)).map((res: any) => res).catch(error => this.handleError(error));
  // }
}
