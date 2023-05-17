import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firstname;
  surname;
  email;
  username;
  password;
  password_confirmation;
  term_of_use;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister() {
    this.authProvider.doRegister(this.firstname, this.surname, this.email, this.username, this.password, this.password_confirmation, this.term_of_use).subscribe(data => {
      console.log(data);
      if (data['error_code'] == 0) {
        this.navCtrl.setRoot('LoginPage');
      }
    });
  }

  goLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}
