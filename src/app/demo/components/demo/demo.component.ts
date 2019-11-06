import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  items = ['Mauricio', 'Juan', 'Luis'];

  power = 10;
  exp = 2;


  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
