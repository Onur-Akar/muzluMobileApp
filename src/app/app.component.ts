import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class muzluMobileApp {
  rootPage: any = 'LoginPage';
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    this.presentLoading();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.get('introShown').then((result) => {
        if (result) {
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);
        }

        this.loader.dismiss();
      });
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Giriş yapılıyor..."
    });

    this.loader.present();
  }
}

