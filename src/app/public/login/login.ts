import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormModel } from '../../private/shared/models/form.model';
import { GlobalFormValidators } from '../../private/shared/form-validators/global-form.validators';
import { environment } from '../../../environment/environment';
import { Router } from '@angular/router';
import { StorageService } from '../../private/shared/services/storage.service';
@Component({
     selector: 'app-login',
     styleUrl: './login.scss',
     templateUrl: './login.html',
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          MatButtonModule
     ]
})
export class Login implements OnInit {
     public loginForm: FormGroup = new FormGroup({});
     public formModel: FormModel;
     public globalFormValidator: GlobalFormValidators;
     public formErrors: any;
     public validationMessage: any;

     constructor(
          private formBuilder: FormBuilder,
          private router: Router,
          private storageService: StorageService
     ) {
          this.formModel = new FormModel();
          this.globalFormValidator = new GlobalFormValidators();
     }

     ngOnInit(): void {
          this.createLoginForm();
     }

     public createLoginForm() {
          this.loginForm = this.formBuilder.group({
               email: new FormControl('', [Validators.required, Validators.email]),
               password: new FormControl('', [Validators.required])
          });
          this.loadFormProperty('loginForm');
     }

     public submit() {
          if (!this.loginForm.valid) {
               this.loginForm.markAllAsTouched();
               this.displayAllFormErrors(this.loginForm);
          }

          let { email, password } = this.loginForm.getRawValue();

          if (email === environment.config.dummyUser.email &&
               password === environment.config.dummyUser.password
          ) {
               this.storageService.setUserLoggedIn(true)
               this.router.navigate(['/dashboard'])
               return;
          }
     }

     public loadFormProperty(form: string) {
          this.formErrors = this.formModel.formErrors[form];
          this.validationMessage = this.formModel.validationMessage[form];
     }

     public displaySingleFormError(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displaySingleFormError(
               group,
               this.formErrors,
               this.validationMessage
          );
     }

     public displayAllFormErrors(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displayAllFormErrors(
               group,
               this.formErrors,
               this.validationMessage
          );
     }
}