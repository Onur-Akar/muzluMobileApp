import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SettingsProvider } from '../../providers/settings/settings'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private settings: SettingsProvider) {
    if (localStorage.getItem('user_details')) {
      this.navCtrl.setRoot('TabsPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    console.log(this.username, this.password);
    this.authProvider.tryLogin(this.username, this.password).subscribe(res => {
      if (res.type == 'success') {
        let user = {
          'username': this.username,
          'api_token': res.api_token,
          'userPhoto': ''
        };

        localStorage.setItem('user_details', JSON.stringify(user));

        this.settings._headerSettingsWAuth.headers.Authorization = `Bearer ${user.api_token}`;

        this.navCtrl.setRoot('TabsPage');
      } else {
        alert(res.text);
      }
    }, err => {
      console.log(err);
    });
  }
}
