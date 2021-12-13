import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AdminRoutingModule } from 'src/app/@admin/pages/admin-routing.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
