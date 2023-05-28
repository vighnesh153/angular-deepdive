import { Component, OnInit } from '@angular/core';
import { IServer } from '../IServer';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  servers: IServer[] = [];

  constructor(private serversService: ServersService) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }

  onCreateServer() {
    const serverName = this.serverName || `server ${this.servers.length}`;
    this.serversService.createServer(serverName);
  }

  onToggleStatus(options: Pick<IServer, 'id'>) {
    this.serversService.toggleStatus(options);
  }

  updateServerName(options: Pick<IServer, 'name' | 'id'>) {
    this.serversService.updateServerName(options);
  }
}
