import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers',
  //selector: '[app-servers]',
  //templateUrl: './servers.component.html',
  template: `
    <p>Hola</p>
    <app-server></app-server>
    <app-server></app-server>
  `,
  //styleUrls: ['./servers.component.css']
  styles: [`
    p {
      color: red;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
