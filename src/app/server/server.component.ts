import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName: string = '';

  allowNewServer: boolean = true;

  serverCreationStatus: string = 'No Server was created!';

  onCreateServer(){
    this.serverCreationStatus = 'Server was JUST created!';
  }
  onCreateServer2(){
    console.log('HOVERED!')
  }
  onUpdateServerName(event: Event){
    this.serverName = event.target.value;
  }




  constructor() {
    setTimeout(() =>{
      this.allowNewServer = false;
    },2000);
  }

  ngOnInit() {
  }

}
