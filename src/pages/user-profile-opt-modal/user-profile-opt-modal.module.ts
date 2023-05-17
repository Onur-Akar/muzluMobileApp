import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileOptModalPage } from './user-profile-opt-modal';

@NgModule({
  declarations: [
    UserProfileOptModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileOptModalPage),
  ],
})
export class UserProfileOptModalPageModule {}
