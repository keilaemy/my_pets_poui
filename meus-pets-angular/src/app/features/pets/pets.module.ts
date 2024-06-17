import { PetsRouteModule } from './pets-route.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PetsRouteModule
  ]
})
export class PetsModule { }
