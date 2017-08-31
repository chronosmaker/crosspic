import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-crosspic',
  templateUrl: './crosspic.component.html',
  styleUrls: ['./crosspic.component.less']
})
export class CrosspicComponent implements OnInit {

  constructor(private systemService: SystemService, private router: Router, private routeInfo: ActivatedRoute) {
    this.systemService.headerBtns.next(Object.assign([], [{
      text: 'mission', callback: () => this.router.navigate(['./'], {relativeTo: routeInfo})
    }, {
      text: 'editor', callback: () => this.router.navigate(['./editor'], {relativeTo: routeInfo})
    }]));
  }

  ngOnInit() {
  }

}
