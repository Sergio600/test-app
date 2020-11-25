import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
    // добавили, чтобы заработал ngModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SergioComponent } from './sergio/sergio.component';
import { NewtestComponent } from './newtest/newtest.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppService} from '../service/app.service'
import {MatSortModule} from '@angular/material/sort';
import { TestCasePipe } from './pipe/testcase.pipe';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {MatMenuModule} from '@angular/material/menu';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { App1Component } from './app1/app1.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    SergioComponent,
    NewtestComponent,
    UserComponent,
    TestCasePipe,
    NotFoundComponent,
    TestComponent,
    App1Component
  ],
  imports: [
    BrowserModule,
    // добавили, чтобы заработал ngModule
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSortModule,
    HttpClientModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
        }),
    MatMenuModule,
    AppRoutingModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
