import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from 'src/app/libs/login-box/login-box.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginBoxComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(event: any) {
    console.log(event);
  }

}
