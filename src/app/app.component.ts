import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  // name:string;

  constructor(){
    this.title='My app';
    // this.name='sousouki';
  }

  // setName(event:Event) {
  //   console.log(event);
  //   this.name = (<HTMLInputElement>event.target).value;
  // }
}
