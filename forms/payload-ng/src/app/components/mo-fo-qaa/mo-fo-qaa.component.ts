import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoFormData } from 'src/app/models/MoFormData';
import { MoFormService } from 'src/app/services/mo-form.service';

@Component({
  selector: 'app-mo-fo-qaa',
  templateUrl: './mo-fo-qaa.component.html',
  styleUrls: ['./mo-fo-qaa.component.scss'],
})
export class MoFoQaaComponent implements OnInit {
  formName: string;
  submited: boolean;

  moForm = new FormGroup({
    qcolor: new FormControl('', Validators.required),
    qcountry: new FormControl('', Validators.required),
    qelectronic: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  }) as MoFormData;

  constructor(private moFormService: MoFormService) {
    this.formName = 'Questions and Answers';
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
