import { Injectable } from '@angular/core';
import { IServer } from '../IServer';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  servers: IServer[] = [];

  constructor() { }

  createServer(serverName: string) {
    this.servers.push({
      id: Math.random().toString(16).slice(2, 7),
      name: serverName,
      status: Math.random() < 0.5 ? 'online' : 'offline',
    });
  }

  toggleStatus({ id: serverId }: Pick<IServer, 'id'>) {
    const server = this.servers.find((server) => server.id === serverId)!;
    server.status = server.status === 'online' ? 'offline' : 'online';
  }

  updateServerName({ name, id: serverId }: Pick<IServer, 'name' | 'id'>) {
    const server = this.servers.find((server) => server.id === serverId)!;
    server.name = name;
  }
}
