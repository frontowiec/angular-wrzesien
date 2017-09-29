import {Directive, OnInit, Renderer2, Input, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input('highlight')
  color;

  hover = false;

  @HostBinding('style.borderLeftColor')
  get getMeColor() {
    return this.hover ? this.color : 'inherit';
  }

  @HostListener('mouseenter')
  onEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.hover = false;
  }

  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elem.nativeElement, 'borderLeftColor', this.color);
  }
}
