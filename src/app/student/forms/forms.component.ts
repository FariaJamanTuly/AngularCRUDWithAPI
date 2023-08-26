import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  loginform: any = FormGroup;

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      lname: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      fname: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
        ],
      ],
    });
  }

  formvaluecontriol(name: any) {
    return this.loginform.get(name);
  }

  data: any = [];
  isError: boolean = false;
  constructor(private fb: FormBuilder) {}
  xxx() {
    console.log(1);
  }
  datasubmit() {
    if (!this.loginform.invalid) {
      this.data.push(this.loginform.value);
      this.isError = false;
    } else {
      this.isError = true;
    }
  }
}
