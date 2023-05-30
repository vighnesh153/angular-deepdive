import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponentPlaceholder]'
})
export class DynamicComponentPlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
