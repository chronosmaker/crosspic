import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SystemService {

  systemInfo = {
    title: '{crosspic}'
  };

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
