import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{RegistroPage} from '../../pages/registro/registro'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Registro(){
   this.navCtrl.push(RegistroPage);
  }

}
