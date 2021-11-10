import { Component, Input, OnInit } from '@angular/core';
import { MoFormService } from 'src/app/services/mo-form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoFormData } from '../../models/MoFormData';

@Component({
  selector: 'app-mo-fo-message',
  templateUrl: './mo-fo-message.component.html',
  styleUrls: ['./mo-fo-message.component.scss'],
})
export class MoFoMessageComponent implements OnInit {
  formName: string;
  submited: boolean;

  moForm = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  }) as MoFormData;

  constructor(private moFormService: MoFormService) {
    this.formName = 'Message';
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
