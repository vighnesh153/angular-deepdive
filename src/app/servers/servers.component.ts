import { Component, OnInit, ViewChild } from '@angular/core';
import { IServer } from '../IServer';
import { ServersService } from '../services/servers.service';
import { FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  servers: IServer[] = [];

  // @ViewChild('signUpForm', { static: true })
  // signUpForm: NgForm;

  signUpForm: FormGroup;

  constructor(private serversService: ServersService) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.servers = this.serversService.servers;

    this.signUpForm = new FormGroup({
      serverName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  onSubmit() {
    // console.log(this.signUpForm);
    console.log(this.signUpForm);
    const serverName = this.signUpForm.value.serverName || `server ${this.servers.length}`;
    this.serversService.createServer(serverName);
  }

  onToggleStatus(options: Pick<IServer, 'id'>) {
    this.serversService.toggleStatus(options);
  }

  updateServerName(options: Pick<IServer, 'name' | 'id'>) {
    this.serversService.updateServerName(options);
  }
}
