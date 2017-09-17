import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppComponent} from "./containers/app/app.component";
import {DrawerComponent} from "./components/drawer/drawer.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ModalComponent} from "./components/modal/modal.component";

export const COMPONENTS = [
  AppComponent,
  DrawerComponent,
  FooterComponent,
  HeaderComponent,
  ModalComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
