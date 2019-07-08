import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template:'<app-server></app-server><app-server></app-server><app-server></app-server>',  //templateUrl: './servers.component.html', // mozna uzyc odwołania do szablonu lub wkleić zawartość szablonu
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // dodanie nowej zmiennej typu logicznego
  allowNewServers : boolean = false;

  constructor() 
  {
      // po 2 sekundach uruchom funkcje
      // () => {} to to samo co wywołanie samej funkcji
      // w {} podajemy instrukcje które mają się wykonać
      setTimeout( () => {
          this.allowNewServers = true;
      } ,2000);

  }

  ngOnInit() {
  }


}
