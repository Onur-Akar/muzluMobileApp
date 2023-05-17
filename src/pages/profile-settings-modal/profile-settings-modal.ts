import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProfileSettingsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-settings-modal',
  templateUrl: 'profile-settings-modal.html',
})
export class ProfileSettingsModalPage {
  workSelectedValue: number = null;
  educationSelectedValue: number = null;
  eduStatusSelectedValue: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSettingsModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
