import {Component, Input} from '@angular/core';
import * as layout from '../../reducers/layout';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent {
  @Input() site: string;
  @Input() menus: layout.Menu[];
}
