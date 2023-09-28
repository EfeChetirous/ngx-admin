import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme/theme.module';
import {  NbRouteTabsetModule,  NbTabsetModule} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    HttpClientModule 
  ],
  declarations: [
  ]
})
export class OfferModule { }
