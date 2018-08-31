import { Routes, RouterModule } from '@angular/router';
import {ProfileEditorComponent} from './profile-editor.component';

export const routes: Routes = [
  { path: '', component: ProfileEditorComponent },   
];


export const routing = RouterModule.forChild(routes);