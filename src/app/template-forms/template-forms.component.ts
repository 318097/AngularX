import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  name: string;
  password: string;
  mobile: any;
  constructor() { }

  ngOnInit() {
  }

  login(obj: any) {
    console.log(obj);
  }
  log($form: any) {
    console.log($form);
  }

}
