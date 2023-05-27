import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId = Math.random().toString(16).slice(2, 7);
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
