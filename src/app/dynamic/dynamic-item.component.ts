import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dynamic-item',
  template: `
    <p>
      dynamic-item Works! {{test}}
    </p>
  `,
  styles: []
})
export class DynamicItemComponent implements OnInit {

  @Input()
  test: string;

  constructor() { }

  ngOnInit() {
  }

}
