import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'practice', //имя компонента
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent implements OnInit {
message = 'Hello world';
myID="someID";
userColor="black";
userStyle = "";

customStyle = {
  'color': 'red',
  'background': 'green'
}

isHidden = false;
age =20;

users=[
  {
    id: 1,
    name: "Vasya",
    age: 20
},
  {
    id: 2,
    name: "Petya",
   age: 21
},
  {
    id: 3,
    name: "Kolya",
    age: 22
}
];

month=2;

// добавляем новое свойство appService в текущий класс 
// которое ссылается на объект AppService.(Inject)
  constructor(private appService:AppService) { 
setTimeout(()=>{
  this.message="Angular";
  this.myID="someID2";
},3000);


}

changeColor(color){
  this.userStyle = `color: ${color}`;
}

changeBackground(){
  this.customStyle['background']='yellow';
}

test(text){
  alert(text);
}

  ngOnInit(): void {
  }


  
  remove(user){
    let index = this.users.indexOf(user);
    if(index!==-1){
      this.users.splice(index,1);
    }
  }

  toggle(){
    this.appService.sideNavToggle();
  }
}
