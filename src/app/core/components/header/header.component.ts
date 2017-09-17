import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import * as layout from '../../reducers/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() menu: layout.Menu;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
    //   console.log(event);
    // });
  }
}
