import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSettingsModalPage } from './profile-settings-modal';

@NgModule({
  declarations: [
    ProfileSettingsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSettingsModalPage),
  ],
})
export class ProfileSettingsModalPageModule {}
