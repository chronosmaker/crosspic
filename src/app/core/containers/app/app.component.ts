import 'rxjs/add/operator/filter';
import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as layout from '../../actions/layout';
import * as formLayout from '../../reducers/layout';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  site$: Observable<string>;
  activeMenu$: Observable<formLayout.Menu>;
  menus$: Observable<Array<formLayout.Menu>>;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.site$ = this.store.select(fromRoot.getSite);
    this.activeMenu$ = this.store.select(fromRoot.getActiveMenus);
    this.menus$ = this.store.select(fromRoot.getMenus);
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      this.store.dispatch(new layout.SelectModule(event['urlAfterRedirects'].split('/')[1]));
    });
  }
}
