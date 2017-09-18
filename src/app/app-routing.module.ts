import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/crosspic', pathMatch: 'full'},
  {path: 'crosspic', loadChildren: './crosspic/crosspic.module#CrosspicModule'},
  {path: '**', redirectTo: '/crosspic'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
