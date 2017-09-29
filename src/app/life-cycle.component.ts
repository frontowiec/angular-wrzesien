import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges, Input, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'life-cycle',
  template: `
    <p>
      {{value.message}} message
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LifeCycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('value')
  value;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', arguments);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', arguments);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', arguments);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', arguments);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', arguments);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', arguments);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', arguments);
  }

  ngOnInit(): void {
    console.log('ngOnInit', arguments);
  }
}
