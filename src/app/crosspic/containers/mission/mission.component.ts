import {Component, OnDestroy, OnInit} from '@angular/core';
import {CrosspicService} from "../../services/crosspic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less']
})
export class MissionComponent implements OnInit, OnDestroy {

  unsubscribe: any;
  missionList = [];
  mouseHover = null;
  modalList: any;

  constructor(private crosspicService: CrosspicService, private router: Router, private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.unsubscribe = this.crosspicService.getMissionList().subscribe(res => {
      this.missionList = res;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  openModal(modal, list) {
    this.modalList = list;
    modal.open();
  }

  modalAction(modal, queryParams) {
    modal.close(() => {
      this.router.navigate(['./play'], {queryParams: queryParams, relativeTo: this.routeInfo});
    });
  }
}
