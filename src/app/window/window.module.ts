import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from '../part1/part1.component';
import { Part2Component } from '../part2/part2.component';
import { WindowRoutingModule } from './window-routing.module';

import {HttpClientModule, HttpClient} from '@angular/common/http';
//import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [Part1Component, Part2Component],
  imports: [
    CommonModule,
    WindowRoutingModule
    //подключаем модуль translate, но нужно указывать forchild
    // но обязательно должен быть forRoot для вышестоящего модуля 
    // TranslateModule.forChild({
    //   loader: {
    //       provide: TranslateLoader
    //   }
      // }),
  ]
})
export class WindowModule { }
