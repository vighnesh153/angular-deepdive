import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightpink';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseenter(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightpink');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
