import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {

  drawerInfo = this.systemService.systemInfo;

  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
  }

  getKeys(obj){
    return Object.keys(obj);
  }

}
