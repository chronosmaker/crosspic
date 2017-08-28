import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-crosspic',
  templateUrl: './crosspic.component.html',
  styleUrls: ['./crosspic.component.less']
})
export class CrosspicComponent implements OnInit {

  hintData = {row: [], col: []};
  hoverCount = {row: null, col: null};

  missionData = {
    option: {
      size: 50,
      row: 5,
      col: 5,
      life: 5,
      hard: false
    },
    data: [
      [
        {fill: 1, color: 'black'},
        {fill: 0, color: 'white'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'}
      ],
      [
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 0, color: 'white'},
        {fill: 1, color: 'black'},
        {fill: 0, color: 'white'}
      ],
      [
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'}
      ],
      [
        {fill: 0, color: 'white'},
        {fill: 0, color: 'white'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 0, color: 'white'}
      ],
      [
        {fill: 0, color: 'white'},
        {fill: 0, color: 'white'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'},
        {fill: 1, color: 'black'}
      ]
    ]
  };

  constructor(private systemService: SystemService) {
    this.systemService.headerBtns.next(Object.assign([], [{
      text: 'mission', callback: () => {
      }
    }, {
      text: 'editor', callback: () => {
      }
    }]));
  }

  ngOnInit() {
    this.hintData = this.initHintData(this.missionData);
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
  }

  checkStatus(missionData) {
    missionData.option.win = true;
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
    return missionData.option.win;
  }

  changeStatus(td, e) {
    if (this.missionData.option.hard) {
      td.status = e.button;
    } else {
      if (e.button === 0 && !td.fill && td.status !== 4) {
        td.status = 4;
        if (this.missionData.option.life-- === 1) {
          alert('Game Over...');
        }
      } else if (td.status !== 0 && td.status !== 4) {
        td.status = e.button;
      }
    }
    if (this.missionData.option.life > 0 && this.checkStatus(this.missionData)) {
      alert('Win!!!');
    }
  }

}
