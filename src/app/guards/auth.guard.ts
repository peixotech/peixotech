import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { IAuthService } from 'src/data/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: IAuthService,
    private router: Router
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const isLogged = await this.auth.isLoggedIn()
    if (isLogged !== true) {
      console.log('Access not allowed!', Date.now());
      this.router.navigate(['login'])
    }
    return true;
  }

}
