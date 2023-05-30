import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent],
  exports: [
    SecondComponentComponent, // this component can now be used in a module that imports this module
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'first-component', component: FirstComponentComponent },
          { path: 'second-component', component: SecondComponentComponent },
        ],
      },
    ]),
  ],
})
export class MyFirstModuleModule {}
