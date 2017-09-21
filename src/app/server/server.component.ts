import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  title:string;
  body:string;

  constractor() {
        this.title="Say hello to my little friend";
        this.body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec semper enim."+
        "Praesent consectetur elit sit amet risus malesuada, quis molestie ipsum condimentum.";
  }
}
