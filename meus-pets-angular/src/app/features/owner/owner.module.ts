import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { OwnerRouteModule } from './owner-route.module';
import { OwnerComponent } from './owner.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    OwnerRouteModule
  ]
})
export class OwnerModule { }
