import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  hintData = {row: [], col: []};

  missionData = {
    option: {
      row: 5,
      col: 5
    },
    data: [
      [{fill: true, color: 'black'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}],
      [{fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: false, color: 'white'}],
      [{fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}],
      [{fill: false, color: 'white'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: false, color: 'white'}],
      [{fill: false, color: 'white'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}]
    ]
  };

  ngOnInit() {
    this.hintData = this.initHintData();
  }

  initHintData() {
    let hintData = {row: [], col: []};
    for (let i = 0; i < this.missionData.option.row; i++) {
      hintData.row[i] = [];
      let temp = 0;
      for (let j = 0; j < this.missionData.option.col; j++) {
        if (this.missionData.data[i][j].fill) {
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
    for (let i = 0; i < this.missionData.option.col; i++) {
      hintData.col[i] = [];
      let temp = 0;
      for (let j = 0; j < this.missionData.option.row; j++) {
        if (this.missionData.data[j][i].fill) {
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
}
