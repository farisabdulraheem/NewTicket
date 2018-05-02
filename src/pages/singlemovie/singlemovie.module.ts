import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglemoviePage } from './singlemovie';

@NgModule({
  declarations: [
    SinglemoviePage,
  ],
  imports: [
    IonicPageModule.forChild(SinglemoviePage),
  ],
})
export class SinglemoviePageModule {}
