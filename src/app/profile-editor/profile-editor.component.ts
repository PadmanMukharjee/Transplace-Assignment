import { Component } from '@angular/core';
import {FormBuilder,Validators,FormArray, ValidatorFn,AbstractControl} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'profile-editor',
    templateUrl: 'profile-editor.component.html',
    styleUrls: ['profile-editor.component.scss']
})
export class ProfileEditorComponent {
    profileForm = this.fb.group({
        firstName: ['', [Validators.required,this.emptySpaceValidator()]],
        lastName: ['',Validators.required],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
        aliases: this.fb.array([
          this.fb.control('')
        ])
      });
    
      get aliases() {
        return this.profileForm.get('aliases') as FormArray;
      }
    
      constructor(private fb: FormBuilder) { }
    
    
      updateProfile() {
        this.profileForm.patchValue({
          firstName: 'Nancy',
          address: {
            street: '123 Drew Street'
          }
        });
      }
    
      addAlias() {
        this.aliases.push(this.fb.control(''));
      }
    
      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
      }
      emptySpaceValidator():ValidatorFn{
        return (control: AbstractControl): {[key: string]: any} | null => {
          const forbidden = control.value.trim();
          return forbidden !="" ? null: {value: control.value};
        };
      }
}
