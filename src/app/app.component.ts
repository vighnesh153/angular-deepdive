import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { ServersService } from './services/servers.service';
import { IServer } from './IServer';
import { filter, interval, map } from 'rxjs';
import { UsersService } from './services/users.service';
import { DynamicComponentPlaceholderDirective } from './dynamic-component-placeholder.directive';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild(DynamicComponentPlaceholderDirective, { static: true })
  appDynamicComponentPlaceholder: DynamicComponentPlaceholderDirective;

  pokemonName = signal('Pikachu');
  servers: IServer[] = [];

  constructor(
    private serversService: ServersService,
    private usersService: UsersService
  ) {}

  // invoked after component is initialized
  ngOnInit() {
    this.servers = this.serversService.servers;

    this.usersService.getAllUsers();

    // interval(1000)
    //   .pipe(
    //     filter((data, index) => {
    //       return data % 2 === 0;
    //     }),
    //     map((data, index) => {
    //       return `Round: ${data} (${index})`;
    //     })
    //   )
    //   .subscribe((count) => {
    //     console.log(count);
    //   });
  }
  // invoked after some input property changes
  ngOnChanges() {}
  // invoked during every change detection run
  ngDoCheck() {}
  // invoked after content (ng-content) has been projected into view
  ngAfterContentInit() {}
  // invoked after projected content has been checked
  ngAfterContentChecked() {}
  // invoked after component's view (and child views) have been initialized
  ngAfterViewInit() {}
  // invoked every time the component's view (and child views) have been checked
  ngAfterViewChecked() {}
  // invoked before the component is destroyed
  ngOnDestroy() {}

  onUpdatePokemonName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pokemonName.update(() => target.value);
    // this.pokemonName = target.value;
  }

  onShowAlert() {
    const hostViewContainerRef =
      this.appDynamicComponentPlaceholder.viewContainerRef;
    hostViewContainerRef.clear();

    const alertComponentRef =
      hostViewContainerRef.createComponent(AlertComponent);
    alertComponentRef.instance.type = 'error';
  }
}
