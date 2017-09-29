import {Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicItemComponent} from './dynamic-item.component';

@Component({
  selector: 'dynamic',
  template: `
    <p>
      dynamic Works!
    </p>
    <div><ng-template #outlet></ng-template></div>
  `,
  styles: []
})
export class DynamicComponent implements OnInit {

  @ViewChild('outlet', {read: ViewContainerRef})
  outlet: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(DynamicItemComponent);
    const component = factory.create(this.injector);
    component.instance.test = 'hello';
    this.outlet.insert(component.hostView, 0);
  }
}
