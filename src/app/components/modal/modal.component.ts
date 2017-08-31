import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {

  show = false;
  active = false;
  observable: any;
  unsubscribe: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  open(callback) {
    this.show = true;
    this.change(callback);
  }

  close(callback) {
    this.show = false;
    this.change(callback);
  }

  change(callback) {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
    this.active = true;
    this.observable = Observable.timer(500);
    this.unsubscribe = this.observable.subscribe(() => {
      this.active = false;
      if (callback) {
        callback();
      }
    });
  }

}
