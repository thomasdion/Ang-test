import { Component, OnInit, Input } from '@angular/core';
import {ServersComponent} from '../servers/servers.component'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']
})
export class ServerComponent implements OnInit{

  title:string;
  status:string;
  @Input() name: string;

  constractor() {

  }
  ngOnInit() {
    this.title="";
    this.status="";
    this.name="";
  }
  getColor(){

         this.status = Math.random()>0.5?'Online':'Offline';
         return this.status==='Online'?'green':'red';
         //return 'white';
        // return 'white';
  }
}
