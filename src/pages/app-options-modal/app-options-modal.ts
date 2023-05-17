import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProfileOptModalPage } from '../user-profile-opt-modal/user-profile-opt-modal';

/**
 * Generated class for the AppOptionsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-options-modal',
  templateUrl: 'app-options-modal.html',
})
export class AppOptionsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppOptionsModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onLogOut() {
    localStorage.removeItem('user_details');

    this.navCtrl.setRoot(LoginPage);
  }

  openProfileOpt() {
    this.navCtrl.push(UserProfileOptModalPage);
  }
}
