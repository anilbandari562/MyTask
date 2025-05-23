import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Payments2RoutingModule } from './payments2-routing.module';
import { CodComponent } from './cod/cod.component';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CodComponent,
    UpiComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    Payments2RoutingModule
  ]
})
export class Payments2Module { }
