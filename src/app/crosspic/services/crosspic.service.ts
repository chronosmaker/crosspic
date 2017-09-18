import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CrosspicService {

  constructor(private http: HttpClient) {
  }

  getMissionList(): Observable<any> {
    return this.http.get('assets/mission/list.json').map((res: any) => res || []);
  }
  getMissionData(id): Observable<any> {
    return this.http.get('assets/mission/' + id + '.json').map((res: any) => res);
  }
}
