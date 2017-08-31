import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CrosspicComponent} from "./pages/crosspic/crosspic.component";
import {PlayComponent} from "./pages/crosspic/play/play.component";
import {MissionComponent} from "./pages/crosspic/mission/mission.component";
import {EditorComponent} from "./pages/crosspic/editor/editor.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'crosspic', component: CrosspicComponent, children: [
    {path: '', component: MissionComponent},
    {path: 'play', component: PlayComponent},
    {path: 'editor', component: EditorComponent}]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
