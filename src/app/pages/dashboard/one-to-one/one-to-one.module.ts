import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme/theme.module';
import {  NbRouteTabsetModule,  NbTabsetModule} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    ThemeModule
  ],
  declarations: [
  ]
})
export class OneToOneModule {


 }
