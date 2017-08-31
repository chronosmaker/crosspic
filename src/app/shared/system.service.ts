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

  private handleError(error: any) {
    console.error('error catched', error);
    return Observable.of({description: 'Error Value Emitted'});
  }

  getMissionList(): Observable<any> {
    return this.http.get('assets/mission/list.json').map((res: any) => res).catch(error => this.handleError(error));
  }
  getMissionData(id): Observable<any> {
    return this.http.get('assets/mission/' + id + '.json').map((res: any) => res).catch(error => this.handleError(error));
  }
}
