import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import {StoreModule} from '@ngrx/store';
// import {EffectsModule} from '@ngrx/effects';

// import {reducers} from './reducers';
import {CrosspicService} from "./services/crosspic.service";
import {MissionComponent} from "./containers/mission/mission.component";
import {PlayComponent} from "./containers/play/play.component";
import {EditorComponent} from "./containers/editor/editor.component";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MissionComponent},
      {path: 'play', component: PlayComponent},
      {path: 'editor', component: EditorComponent}
    ]),
    // StoreModule.forFeature('crosspic', reducers),
    // EffectsModule.forFeature([CrosspicEffects]),
    CoreModule.forRoot()
  ],
  declarations: [
    MissionComponent,
    PlayComponent,
    EditorComponent
  ],
  providers: [CrosspicService]
})
export class CrosspicModule {
}
