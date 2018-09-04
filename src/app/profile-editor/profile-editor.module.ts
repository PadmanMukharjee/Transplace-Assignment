// Angular Imports
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
// This Module's Components
import { ProfileEditorComponent } from './profile-editor.component';
import {routing} from './profile-editor.routing';
import {AddMR} from './name.pipe';

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule,
        routing
    ],
    declarations: [
        ProfileEditorComponent,
        AddMR
    ]
})
export class ProfileEditorModule {

}
