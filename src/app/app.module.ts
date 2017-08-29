import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {DrawerComponent} from './components/drawer/drawer.component';
import {HomeComponent} from './pages/home/home.component';
import {SystemService} from "./shared/system.service";
import {CrosspicComponent} from './pages/crosspic/crosspic.component';
import {MissionComponent} from './pages/crosspic/mission/mission.component';
import {PlayComponent} from './pages/crosspic/play/play.component';
import {EditorComponent} from './pages/crosspic/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DrawerComponent,
    HomeComponent,
    CrosspicComponent,
    MissionComponent,
    PlayComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SystemService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
