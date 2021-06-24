import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'zzz';
  isDisabled:boolean = true;
  addText:string = "pas de voiture ajoutés";
  nomVoiture:string = "";

  constructor(){
    setTimeout(()=>{
      this.isDisabled = false;
    }, 2000);
  }
  afficherAlert(){
    this.addText = 'une voiture a été ajoutée';
  }
}
