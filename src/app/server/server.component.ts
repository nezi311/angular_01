import { Component } from '@angular/core';
// importujemy component z bibliotek
// tworząc component musimy dodać @component, oraz selektor z nazwą
@Component({
    selector: 'app-server'
    , templateUrl: './server.component.html'  
})

//tworzymy klase ServerComponent
export class ServerComponent 
{
    // deklaracja zmiennych
    private server_id       : number = 10;
    server_status   : string = 'offline';

    // definicja funkcji 
    getServerStatus()
    {
        // wskazuje tak samo jak w programowaniu obiektowym, o jaką zmienną mi chodzi
        return this.server_status;
    }
}