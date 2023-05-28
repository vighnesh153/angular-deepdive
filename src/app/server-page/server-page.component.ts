import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';
import { IServer } from '../IServer';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.scss'],
})
export class ServerPageComponent implements OnInit, OnDestroy {
  currentServer?: IServer;

  paramsSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const serverId = this.route.snapshot.params['serverId'];
    const allowEdit = this.route.snapshot.queryParams['allowEdit'];
    const fragment = this.route.snapshot.fragment;
    this.currentServer = this.findServerById(serverId);
    this.redirectIfNotFound();

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.currentServer = this.findServerById(params['serverId']);
      this.redirectIfNotFound();
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  findServerById(serverId: string): IServer | undefined {
    return this.serversService.servers.find((server) => server.id === serverId);
  }

  redirectIfNotFound() {
    if (!this.currentServer) {
      this.router.navigate(['/servers'], {
        queryParams: { allowEdit: 1 },
        fragment: 'status',
      });
    }
  }

  onToggleStatus(options: Pick<IServer, 'id'>) {
    this.serversService.toggleStatus(options);
  }

  updateServerName(options: Pick<IServer, 'name' | 'id'>) {
    this.serversService.updateServerName(options);
  }
}
