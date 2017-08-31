import {Component, OnDestroy, OnInit} from '@angular/core';
import {SystemService} from "../../../shared/system.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit, OnDestroy {

  unsubscribe: any;
  hintData = {row: [], col: []};
  hoverCount = {row: null, col: null};
  lifeCount = [];
  missionType = '0';
  missionData = {
    id: null,
    title: null,
    option: {
      size: null,
      row: null,
      col: null,
      life: null
    },
    data: []
  };

  constructor(private systemService: SystemService, private routeInfo: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.missionType = this.routeInfo.snapshot.queryParams['type'];
    this.unsubscribe = this.systemService.getMissionData(this.routeInfo.snapshot.queryParams['id']).subscribe(res => {
      this.missionData = res;
      this.hintData = this.initHintData(this.missionData);
      this.lifeCount = this.initLife(this.missionData);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  mouseHover(enter, row?, col?) {
    if (enter) {
      this.hoverCount.row = row;
      this.hoverCount.col = col;
    } else {
      this.hoverCount.row = null;
      this.hoverCount.col = null;
    }
  }

  initLife(missionData) {
    let lifeCount = [];
    if (this.missionType === '0') {
      for (let i = 1; i <= missionData.option.life; i++) {
        lifeCount.push(true);
      }
    }
    return lifeCount;
  }

  initHintData(missionData) {
    let hintData = {row: [], col: []};
    for (let i = 0; i < missionData.option.row; i++) {
      hintData.row[i] = [];
      let temp = 0;
      for (let j = 0; j < missionData.option.col; j++) {
        if (missionData.data[i][j].fill) {
          temp++;
        } else {
          if (temp !== 0) {
            hintData.row[i].push(temp);
            temp = 0;
          }
        }
      }
      if (temp !== 0) {
        hintData.row[i].push(temp);
      }
    }
    for (let i = 0; i < missionData.option.col; i++) {
      hintData.col[i] = [];
      let temp = 0;
      for (let j = 0; j < missionData.option.row; j++) {
        if (missionData.data[j][i].fill) {
          temp++;
        } else {
          if (temp !== 0) {
            hintData.col[i].push(temp);
            temp = 0;
          }
        }
      }
      if (temp !== 0) {
        hintData.col[i].push(temp);
      }
    }
    return hintData;
  }

  resetStatus(missionData) {
    for (let i = 0; i < missionData.option.row; i++) {
      for (let j = 0; j < missionData.option.col; j++) {
        missionData.data[i][j].status = null;
      }
    }
    if (this.missionType === '0') {
      missionData.option.life = this.lifeCount.length;
      this.lifeCount = this.initLife(missionData);
    }
  }

  checkStatus(missionData) {
    missionData.option.win = true;
    if (this.missionType === '1') {
      for (let i = 0; i < missionData.option.row; i++) {
        for (let j = 0; j < missionData.option.col; j++) {
          if (missionData.data[i][j].fill) {
            if (missionData.data[i][j].status !== 0) {
              missionData.option.win = false;
            }
          } else {
            if (missionData.data[i][j].status === 0) {
              missionData.option.win = false;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < missionData.option.row; i++) {
        let temp = true;
        for (let j = 0; j < missionData.option.col; j++) {
          if (missionData.data[i][j].fill) {
            if (missionData.data[i][j].status !== 0) {
              missionData.option.win = false;
              temp = false;
            }
          }
        }
        if (temp) {
          for (let j = 0; j < missionData.option.col; j++) {
            if (!missionData.data[i][j].fill && missionData.data[i][j].status !== 4) {
              missionData.data[i][j].status = 2;
            }
          }
        }
      }
      for (let i = 0; i < missionData.option.col; i++) {
        let temp = true;
        for (let j = 0; j < missionData.option.row; j++) {
          if (missionData.data[j][i].fill) {
            if (missionData.data[j][i].status !== 0) {
              temp = false;
            }
          }
        }
        if (temp) {
          for (let j = 0; j < missionData.option.col; j++) {
            if (!missionData.data[j][i].fill && missionData.data[j][i].status !== 4) {
              missionData.data[j][i].status = 2;
            }
          }
        }
      }
    }
    return missionData.option.win;
  }

  changeStatus(td, e, modal) {
    if (this.missionType === '1') {
      td.status = e.button;
    } else {
      if (e.button === 0 && !td.fill && td.status !== 4) {
        td.status = 4;
        this.lifeCount[--this.missionData.option.life] = false;
        if (this.missionData.option.life === 0) {
          modal.open();
        }
      } else if (td.status !== 0 && td.status !== 4) {
        td.status = e.button;
      }
    }
    if (this.missionData.option.life > 0 && this.checkStatus(this.missionData)) {
      modal.open();
    }
  }

  modalAction(modal, flag) {
    modal.close(() => {
      if (flag) {
        this.resetStatus(this.missionData);
      } else {
        this.router.navigate(['../'], {relativeTo: this.routeInfo});
      }
    });
  }
}
