import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {
  phoneNo: any;
  phoneNo2: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.fun(123123));
  }
  // fun(x) {
  //   // remove the digit 2 from a number without using string operations
  //   const last = x % 10;
  //   let n = parseInt(x / 10);
  //   if (n == 1 && last == 2) {
  //     return 1 * 10;
  //   } else if (last == 2) {
  //     return this.fun(n) * 10;
  //   } else if (last != 2) {
  //     return this.fun(n) * 10 + last;
  //   } else {
  //     return 1;
  //   }
  // }

  formatPhoneNumber($event: any) {
    // (888) 888 - 8888
    const n = this.phoneNo;
    // console.log($event);
    if ($event.keyCode !== 8) {
      this.phoneNo = n.replace(/[0-9]{10}/, '(' + n.substr(0, 3) + ')' + n.substr(3, 3) + '-' + n.substr(6, 4));
    }
  }
  removeMobileFormat() {
    // removes all the parenthesis, dash & space
    this.phoneNo = this.phoneNo.replace(/[\(\) -]/g, '');
  }

  inputChanged(e) {
    // console.log("inside input change fucntion",e);
    if ((e.length <= 10) && (e.length > 0)) {
      const first = e.substring(0, 3);
      const mid = e.substring(3, 6);
      const last = e.substring(6, 10);
      e = '(' + first + ') ' + mid + '-' + last;
      return e;
    } else if (e.length === 0) {

    }
  }
  formatMobile() {
    this.phoneNo2 = this.extraxtNo(this.phoneNo2);
    console.log(this.phoneNo2);
    this.phoneNo2 = this.inputChanged(this.phoneNo2);

    // console.log(this.inputChanged(this.athlete.mobile_phone));
  }

  extraxtNo(e) {
    if (e !== "") {
      e = e.replace(/[^A-Z0-9]+/ig, '');
    }
    return e;
  }
}
