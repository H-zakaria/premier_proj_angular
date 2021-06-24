import { Component } from "@angular/core";

@Component({
    selector: '.div-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css']
})
export class VoitureComponent{
    marque:string = 'renault';
    state:boolean = true;
}