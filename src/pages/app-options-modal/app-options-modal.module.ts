import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppOptionsModalPage } from './app-options-modal';

@NgModule({
  declarations: [
    AppOptionsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AppOptionsModalPage),
  ],
})
export class AppOptionsModalPageModule {}
