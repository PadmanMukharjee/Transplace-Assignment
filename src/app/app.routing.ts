import { Routes, RouterModule } from '@angular/router';
import {AuxilaryRouteComponent} from './auxilaryroute/auxilaryroute.component';
export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', loadChildren: 'app/profile-editor/profile-editor.module#ProfileEditorModule' },
  {path:'auxilary',outlet: 'sidebar',component:AuxilaryRouteComponent}
];

export const routing = RouterModule.forRoot(routes);