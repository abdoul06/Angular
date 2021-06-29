import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; 
  serverCreationStatus = 'No server was created!'
  serverName = 'TestServer';
  serverCreated = false; 
  servers = ['TestServer', 'TesttServer 2']


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000);
   }

  ngOnInit(): void {
  }

  onCreatedServer() {
    this.serverCreated = true
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServer(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
