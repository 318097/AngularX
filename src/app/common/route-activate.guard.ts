import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouteActivateGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate guard (next) :', next);
    console.log('canActivate guard (state) :', state);
    if (localStorage.access === 'true') {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
