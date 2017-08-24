import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private systemService: SystemService) {
  }

  headerInfo = {
    title: this.systemService.systemInfo.title
  };

  ngOnInit() {
  }

}
