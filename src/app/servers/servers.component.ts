import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
//  selector: '[app-servers]',
//  selector: '.app-servers',
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName= 'tstserver';
  serverCreated=false;
  servers = ['Testserver', 'Testeserver2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created name is'+this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }


}
