import { Component, Input, OnInit } from '@angular/core';
import { MoFormService } from 'src/app/services/mo-form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoFormData } from '../../models/MoFormData';

@Component({
  selector: 'app-mo-form',
  templateUrl: './mo-fo-adress.component.html',
  styleUrls: ['./mo-fo-adress.component.scss'],
})
export class MoFoAddressComponent implements OnInit {
  formName: string;
  submited: boolean;

  moForm = new FormGroup({
    country: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    city: new FormControl({ value: '', disabled: false }, Validators.required),
    address1: new FormControl('', Validators.required),
    address2: new FormControl(''),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(4),
    ]),
  }) as MoFormData;

  constructor(private moFormService: MoFormService) {
    this.formName = 'Address';
    this.submited = false;
  }

  ngOnInit(): void {
    this.moForm._id = '';
    this.moForm.name = this.formName;
  }

  onSubmit(): void {
    this.moFormService.submit(this.moForm).subscribe((result) => {
      if (result) {
        this.submited = true;
        for (const c in this.moForm.controls) {
          if (this.moForm.controls[c].value) {
            this.moForm.controls[c].disable();
          }
        }
      }
    });
  }
}
