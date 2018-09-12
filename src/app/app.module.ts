import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SearchSelectComponent } from './search-select/search-select.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { GuardsComponent } from './guards/guards.component';
import { RouteActivateGuard } from './common/route-activate.guard';
import { HomeComponent } from './home/home.component';
import { RouteDeactivateGuard } from './common/route-deactivate.guard';
import { CollapsibleCardComponent } from './others/collapsible-card/collapsible-card.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { UiComponent } from './ui/ui.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { MatComponent } from './mat/mat.component';
import { UtilityComponent } from './utility/utility.component';
import { JQ_TOKEN } from './common/jQuery.service';

const jQuery = window['$'];
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    SearchSelectComponent,
    TemplateFormsComponent,
    GuardsComponent,
    HomeComponent,
    CollapsibleCardComponent,
    SafeHtmlPipe,
    UiComponent,
    TestComponent,
    MatComponent,
    UtilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    RouteActivateGuard,
    RouteDeactivateGuard,
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
