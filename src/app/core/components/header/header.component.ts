import {Component, Input} from '@angular/core';
import * as layout from '../../reducers/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Input() menu: layout.Menu;
}
