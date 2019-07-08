import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template:'<app-server></app-server><app-server></app-server><app-server></app-server>',  //templateUrl: './servers.component.html', // mozna uzyc odwołania do szablonu lub wkleić zawartość szablonu
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
