import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IAuthService } from 'src/controllers/auth.interface';
import { User } from 'src/entities/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private auth: IAuthService,
    private router: Router
  ) { }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }

  get userData(): User | null {
    return this.auth.userData;
  }
}
