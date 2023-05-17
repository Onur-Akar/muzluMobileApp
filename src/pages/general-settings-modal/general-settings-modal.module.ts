import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralSettingsModalPage } from './general-settings-modal';

@NgModule({
  declarations: [
    GeneralSettingsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralSettingsModalPage),
  ],
})
export class GeneralSettingsModalPageModule {}
