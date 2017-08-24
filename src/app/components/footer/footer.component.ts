import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private systemService: SystemService) {
  }

  footerInfo = {
    title: this.systemService.systemInfo.title
  };

  ngOnInit() {
  }

}
