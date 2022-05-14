import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoFormData } from 'src/app/models/MoFormData';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  moForm = new FormGroup({
    username: new FormControl('', Validators.required),
    secret: new FormControl('', Validators.required),
  }) as MoFormData;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.userService.submit(this.moForm).subscribe((res) => {
      if (res) {
        this.router.navigate(['admin']);
      }
      else {
        this.router.navigate(['']);
      }
    });
  }
}
