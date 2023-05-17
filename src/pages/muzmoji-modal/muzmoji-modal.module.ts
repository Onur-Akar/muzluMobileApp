import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuzmojiModalPage } from './muzmoji-modal';

@NgModule({
  declarations: [
    MuzmojiModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MuzmojiModalPage),
  ],
})
export class MuzmojiModalPageModule {}
