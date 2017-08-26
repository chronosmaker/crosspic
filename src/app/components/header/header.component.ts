import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  headerInfo = this.systemService.systemInfo;
  currentUrl = '';
  headerBtns = [];

  constructor(private systemService: SystemService, private router: Router) {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.currentUrl = event['urlAfterRedirects'].split('/')[1];
      });
    this.systemService.headerBtns.subscribe(res => this.headerBtns = res);
  }

  ngOnInit() {
  }

}
