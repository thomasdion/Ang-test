import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  title : string;
  
  constructor() {
      this.title="You talkin' to me? You talkin' to me? ";
   }

  ngOnInit() {
  }

}
