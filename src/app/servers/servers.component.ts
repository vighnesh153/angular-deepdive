import { Component } from '@angular/core';
import { IServer } from '../IServer';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCount = 0;
  serverName = '';
  servers: IServer[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push({
      id: Math.random().toString(16).slice(2, 7),
      name: this.serverName || `server ${this.servers.length}`,
      status: Math.random() < 0.5 ? 'online' : 'offline',
    });
  }

  onToggleStatus({ id: serverId }: Pick<IServer, 'id'>) {
    const server = this.servers.find((server) => server.id === serverId)!;
    server.status = server.status === 'online' ? 'offline' : 'online';
  }

  updateServerName({ name, id: serverId }: Pick<IServer, 'name' | 'id'>) {
    const server = this.servers.find((server) => server.id === serverId)!;
    server.name = name;
  }
}
