import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class AppService {
    sideNav: EventEmitter<void>=new EventEmitter();
    
    sideNavToggle(){
        this.sideNav.emit()
    }


}