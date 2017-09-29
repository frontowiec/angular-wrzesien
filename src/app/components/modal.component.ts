import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  @Input()
  show;

  @Input()
  title = '';

  constructor() { }

  ngOnInit() {
  }

}
