import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBoxComponent } from 'src/app/libs/register-box/register-box.component';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { IAuthService } from 'src/controllers/auth.interface';
import { AuthModel } from 'src/entities/auth.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterBoxComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private auth: IAuthService,
    private router: Router,
  ) { }

  async register(event: AuthModel) {
    console.log(event);
    const result = await this.auth.register(event)
    if (result === true) {
      Swal.fire({
        title: 'Usuário criado com sucesso',
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
