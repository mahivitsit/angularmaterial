import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MBL_REGEX = /^[0-9]*$/;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl = new FormControl('', [
  Validators.required]);
  firstNameFormControl = new FormControl('', [
  Validators.required]);
  lastNameFormControl = new FormControl('', [
  Validators.required]);
  mobileFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(MBL_REGEX)]);
  ngOnInit() {
  }

}
