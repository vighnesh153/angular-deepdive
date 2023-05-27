import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IServer } from '../IServer';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Input()
  serverId: IServer['id'];

  @Input('serverName')
  name: IServer['name'];

  @Input('serverStatus')
  status: IServer['status'];

  @Output()
  toggleStatus = new EventEmitter<Pick<IServer, 'id'>>();

  @Output('updateServerName')
  updateName = new EventEmitter<Pick<IServer, 'name' | 'id'>>();

  @ViewChild('serverNameInput', { static: true })
  serverNameInput: ElementRef<HTMLInputElement>;

  // if the ref is part of ng-content
  @ContentChild('bla', { static: true })
  bla: ElementRef<HTMLInputElement>;

  isEditingServerName = false;

  onToggleStatus() {
    this.toggleStatus.emit({ id: this.serverId });
  }

  onUpdateName() {
    this.updateName.emit({
      id: this.serverId,
      name: this.serverNameInput.nativeElement.value,
    });
  }
}
