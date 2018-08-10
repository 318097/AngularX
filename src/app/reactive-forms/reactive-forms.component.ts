import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  // this is a custom validator.
  // the input is the form control. It is of type abstractcontrol because,
  // the input param can be either form contrl or form group. Therefore, AbstractControl is used instead.
  // return 'null' if there are no errors
  // if there are errors, or the input value is invalid , then return an object with the error type as the key name, 
  // and the value to be true is there are errors.
  // the returned 'range' key can be accessed from the template using : formgroup.get('formcontrol').errors.range
  if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { 'range': true };
  }
  return null;
}
function scoreRange(min: number, max: number): ValidatorFn {
  // this is a factory function, which takes in the min & max values and returns a validator function.
  // this is done because the validator function does not take any extra params.
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  }
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  emailErrors: any;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      // formcontrol value takes in 3 params.
      // 1st param is the default value,
      // 2nd param is an array of validations,
      // 3rd param is a method for server side validations,
      name: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.pattern('[0-9]+')]],
      password: ['', Validators.required],
      // 'ratingRange' is a custom validator function, that is defined above the class.
      rating: ['', ratingRange],
      // the validator defined above cannot take any extra parameters.
      // to solve this, we create a factory function which returns the validator function
      score: ['', scoreRange(1, 100)],
    });

    const emailControl = this.userForm.get('email');
    emailControl.valueChanges.subscribe((value) => {
      // console.log('email :', value);
      this.validateEmail(emailControl);
    });
  }
  validateEmail(c: AbstractControl): void {
    if (c.dirty || c.touched && c.errors) {
      this.emailErrors = c.errors;
    }
  }


  login() {
    console.log('login..');
  }
  setValue() {
    // to set all the value of a reactive form use the 'setValue()',
    // for 'setValue()', all the form controls must be mentioned, else it throws an error.
    // if a portion of the form is to be updated then user 'patchValue()'
    const obj = {
      'name': 'abcde..',
      'password': 'xxx',
    };
    // this.userForm.setValue(obj);
    this.userForm.patchValue({ 'name': 'patched value' });
  }

  getFormValue() {
    // using the root form group get the 'name' formcontrol.
    const name = this.userForm.get('name').value;
    console.log('name ::', name);
  }

  setFormValidations() {
    const password = this.userForm.get('password');
    // sets the new validators for the password formcontrl.
    password.setValidators([Validators.required, Validators.minLength(5)]);
    // sets the new validations & performs the new validations & checks.
    // if not used, then the new validations is applied but not checked.
    password.updateValueAndValidity();

    // to clear the validators :
    // password.clearValidators();
  }
}
