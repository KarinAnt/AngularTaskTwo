import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public serverName = "Server 1";
  public serverContent = "Whit Blue Content";
  servers=[];
  constructor() { }

  ngOnInit() {
  }
  addServer(){
    this.servers[this.servers.length] = {'name':this.serverName, 'content':this.serverContent, 'color':'red'};
  }
  addBlueServer(){
    this.servers[this.servers.length] = {'name':this.serverName, 'content':this.serverContent, 'color':'blue'};
  }
}
