import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from 'src/app/libs/login-box/login-box.component';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { IAuthService } from 'src/controllers/auth.interface';
import { AuthModel } from 'src/entities/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginBoxComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: IAuthService,
    private router: Router,
  ) { }

  async login(event: AuthModel) {
    console.log(event);
    const result = await this.auth.login(event)
    if (result?.user) {
      Swal.fire({
        title: 'Login bem sucedido',
        text: 'Você será redirecionado para a página inicial',
        icon: 'success',
      })

      this.router.navigate(['/']);
    } else {
      const msg = this.auth.formatAuthCodes(result.code);
      Swal.fire({
        title: 'Erro',
        text: msg,
        icon: 'error',
      })
    }
  }

}
