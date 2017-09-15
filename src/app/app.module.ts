import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, RouterStateSerializer} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './reducers';
import {CustomRouterStateSerializer} from './shared/utils';

import {SystemService} from './shared/system.service';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {DrawerComponent} from './components/drawer/drawer.component';
import {HomeComponent} from './pages/home/home.component';
import {CrosspicComponent} from './pages/crosspic/crosspic.component';
import {MissionComponent} from './pages/crosspic/mission/mission.component';
import {PlayComponent} from './pages/crosspic/play/play.component';
import {EditorComponent} from './pages/crosspic/editor/editor.component';
import {ModalComponent} from './components/modal/modal.component';

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
    EditorComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
  ],
  providers: [SystemService, {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
