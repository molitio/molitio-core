import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoFormData } from '../../models/MoFormData';
import { MoFormService } from '../../services/mo-form.service';

@Component({
  selector: 'app-list-mo-form',
  templateUrl: './list-mo-form.component.html',
  styleUrls: ['./list-mo-form.component.scss'],
})
export class ListMoFormComponent implements OnInit {
  formData: MoFormData[];

  constructor(private moFormService: MoFormService, private router: Router) {}

  ngOnInit(): void {
    this.moFormService
      .getMoFormDatas()
      .subscribe((data) => (this.formData = data));
  }

  delete(id): void {
    this.moFormService.deleteMoFormData(id).subscribe((result) => {
      if (result) {
        this.formData = this.formData.filter((fd) => fd._id !== id);
      }
    });
  }
}
