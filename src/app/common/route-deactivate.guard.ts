import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardsComponent } from '../guards/guards.component';

@Injectable()
export class RouteDeactivateGuard implements CanDeactivate<GuardsComponent> {
  canDeactivate(
    component: GuardsComponent
    // currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('Guard deactive :', component);
    // 'isDirty' refers to the local property of the 'GuardsComponent'
    console.log('Guard deactive :', component.isDirty);
    // console.log('Guard deactive :', currentRoute);
    // console.log('Guard deactive :', currentState);
    // console.log('Guard deactive :', nextState);
    return confirm('Are you sure?');
  }
}
