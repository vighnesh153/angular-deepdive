import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IServer } from '../IServer';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnChanges {
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

  constructor(private loggingService: LoggingService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']?.currentValue) {
      this.loggingService.logStatusChange(changes['status'].currentValue);
    }
  }

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
