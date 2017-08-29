import {Component, OnDestroy, OnInit} from '@angular/core';
import {SystemService} from "../../../shared/system.service";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less']
})
export class MissionComponent implements OnInit, OnDestroy {

  unsubscribe: any;
  missionList = [];
  mouseHover = null;

  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
    this.unsubscribe = this.systemService.getMissionList().subscribe(res => {
      console.log(res)
      this.missionList = res;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
