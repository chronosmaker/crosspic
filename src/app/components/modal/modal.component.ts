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
    this.unsubscribe.unsubscribe();
  }

  open() {
    this.show = true;
    this.change();
  }

  close() {
    this.show = false;
    this.change();
  }

  change() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
    this.active = true;
    this.observable = Observable.timer(1000);
    this.unsubscribe = this.observable.subscribe(() => {
      this.active = false;
    });
  }

}
