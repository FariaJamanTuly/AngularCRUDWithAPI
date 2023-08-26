import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  fruit = ['apple', 'mango', 'banana'];
  data = null;
  onrecived(evt: any) {
    console.log(evt);
    this.data = evt.price;
  }

  // d: any = [];
  // datapush() {
  //   var i = {
  //     name: 'monaem',
  //     Address: 'Dhaka',
  //     Phone: '013',
  //   };
  //   this.d.push(i);
  //   console.log('push')
  // }
}
