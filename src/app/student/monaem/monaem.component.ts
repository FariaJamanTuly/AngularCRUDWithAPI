import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-monaem',
  templateUrl: './monaem.component.html',
  styleUrls: ['./monaem.component.css'],
})
export class MonaemComponent {
  @Input() data = '';
  @Output() datapass = new EventEmitter();

  datapassclick() {
    console.log('Event Click');
    this.datapass.emit({ price: 200, discount: 10 });
  }
  // @Output name = "Monaem";
}
