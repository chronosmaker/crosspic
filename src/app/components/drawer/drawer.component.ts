import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {

  constructor(private systemService: SystemService) {
  }

  drawerInfo = {
    title: this.systemService.systemInfo.title
  };

  ngOnInit() {
  }

}
