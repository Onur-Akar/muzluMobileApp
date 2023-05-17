import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { ProfileSettingsModalPage } from '../profile-settings-modal/profile-settings-modal';
import { GeneralSettingsModalPage } from '../general-settings-modal/general-settings-modal';

/**
 * Generated class for the UserProfileOptModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-opt-modal',
  templateUrl: 'user-profile-opt-modal.html',
})
export class UserProfileOptModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfileOptModalPage');
  }

  openProfileSetModal() {
    let profileSetModal = this.modalCtrl.create(ProfileSettingsModalPage);

    profileSetModal.present();
  }

  openGeneralSetModal() {
    let generalSetModal = this.modalCtrl.create(GeneralSettingsModalPage);

    generalSetModal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
