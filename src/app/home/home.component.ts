import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { JQ_TOKEN } from '../common/jQuery.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: any;
  htmlData: any = '<p class="red" onclick="sayHello()" style="font-weight :bold; font-style:italic">kljsdflkjlkdsfkal</p>';
  cardData: any = [
    { title: 'Title 1', content: 'Content ... ...' },
    { title: 'Title 2', content: 'Content ... ...' },
    { title: 'Title 3', content: 'Content ... ...' },
  ];

  obj = {
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    // @Inject('JQ_TOKEN') private $: any
  ) {
    // console.log(this.route);
  }

  ngOnInit() {
    // this.$.onload(function () {
    //   alert('sfdf');
    // });
    // this.guardStatus = localStorage.access;
  }

  setAccess(value: any) {
    localStorage.setItem('access', value);
  }

  log() {
    console.log(this.obj);
  }

  sayHello() {
    alert('Hello ...');
  }
}
