import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'test-app';
  isOpened = false;

  str ='hello world!';

  constructor(private appService:AppService,
    private translate: TranslateService){
// подписываемся на события сервиса AppService
    let s = this.appService.sideNav.subscribe(()=>{
      this.isOpened=!this.isOpened;
    });
  this.translate.setDefaultLang('en');
  }

  setLang(lang){
      this.translate.use(lang);
  }
}
