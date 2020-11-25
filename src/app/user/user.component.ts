import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

@Input("person") user; //значение свойства юзер будет задаваться извне через атрибут 
@Output("onDelete") delete:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  removeUser(){
    this.delete.emit(this.user);// emit - сработало событие onDelete.

  }

}
