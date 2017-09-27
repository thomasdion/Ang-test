import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
        h1 {
          color:red;
          font: bold 22px/30px Georgia, serif;
        }
    `
  ]
})
export class ServersComponent implements OnInit {

    title : string;
    name : string;
    serverEnabled : boolean;
    serverNumber : number;
    servers : string[]=[];

  constructor(private route : ActivatedRoute) {
   }

  setServerTimeout() {

    this.serverEnabled=false;
    if (this.serverNumber > 3) {
      this.serverEnabled = false;
    }else{
      setTimeout(()=>{this.serverEnabled=true;
      },500);
    }
  }

  ngOnInit() {

    this.title=this.route.snapshot.data["title"];
    this.name="";
    this.serverNumber = 0;
    this.setServerTimeout();
  }

  createServer() {

    this.setServerTimeout();
    this.serverNumber = this.serverNumber + 1;
    this.servers.push(this.name);
    console.log("The servers" + this.servers);
        // console.log(this.serverEnabled);

  }
  setName(event:Event) {
    console.log(event);
    this.name = (<HTMLInputElement>event.target).value + '@localhost';
  }
}
