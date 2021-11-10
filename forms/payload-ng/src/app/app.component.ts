import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoFormService } from './services/mo-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formName = 'hello form';

  ngOnInit(): void {
  }
}
