// Angular Imports
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
// This Module's Components
import { ProfileEditorComponent } from './profile-editor.component';
import {routing} from './profile-editor.routing';

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule,
        routing
    ],
    declarations: [
        ProfileEditorComponent,
    ]
})
export class ProfileEditorModule {

}
