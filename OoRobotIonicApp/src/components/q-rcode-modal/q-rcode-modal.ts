import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the QRcodeModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'q-rcode-modal',
  templateUrl: 'q-rcode-modal.html'
})
export class QRcodeModalComponent {
  codedDom: string = '';

  constructor(params: NavParams, public navController: NavController) {
    this.codedDom = params.get('codedDom');
  }
  dismiss() {
    this.navController.pop();
  }
}
