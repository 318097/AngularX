import { NgModule } from '@angular/core';
// import for routing
import { RouterModule, Routes } from '@angular/router';

import { SearchSelectComponent } from './search-select/search-select.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { GuardsComponent } from './guards/guards.component';
import { RouteActivateGuard } from './common/route-activate.guard';
import { HomeComponent } from './home/home.component';
import { RouteDeactivateGuard } from './common/route-deactivate.guard';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  { path: 'search-select', component: SearchSelectComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'template-forms', component: TemplateFormsComponent },
  {
    path: 'guards',
    component: GuardsComponent,
    canActivate: [RouteActivateGuard],
    canDeactivate: [RouteDeactivateGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ui', component: UiComponent },
];

@NgModule({
  // remove all declarations
  // import & export the router module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
