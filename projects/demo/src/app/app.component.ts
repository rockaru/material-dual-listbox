import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  
  source = []
  destination = []

  constructor(){
    this.source = [{name:"one"},{name:"two"},{name:"tree"},{name:"four"}]
  }
}
