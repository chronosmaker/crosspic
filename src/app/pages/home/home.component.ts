import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  // hor: [[1,3], [2,1], [5], [2], [3]]
  // ver: [[3],[2], [1,3], [5], [1,1,1]]
  countData = {
    hor: [],
    ver: []
  };

  missionData = {
    option: {
      count: 5
    },
    data: [
      {fill: true, color: 'black'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'},
      {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: false, color: 'white'},
      {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'},
      {fill: false, color: 'white'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: false, color: 'white'},
      {fill: false, color: 'white'}, {fill: false, color: 'white'}, {fill: true, color: 'black'}, {fill: true, color: 'black'}, {fill: true, color: 'black'},
    ]
  };

  ngOnInit() {
    let tempHor = {
      last: false,
      count: 0
    };
    this.missionData.data.forEach((val, index) => {
      tempHor.last = val.fill;
      if (val.fill) {
        tempHor.count++;
      } else {
        this.countData.hor.push(tempHor.count);
        tempHor.count = 0;
      }
      if ((index + 1) % this.missionData.option.count) {

      }
    });
  }

}
