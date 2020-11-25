import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sergio',
  templateUrl: './sergio.component.html',
  styleUrls: ['./sergio.component.scss']
})
export class SergioComponent implements OnInit {


message = "Please enter your name.";


myStyle = {
  'font-size': '12px',
  'background': 'black',
  'color': 'white',
  'border':'1px solid red'
}

testVar=0;

changeTestVar (s){
  this.testVar+=s;
}


users = [];
isChecked;

addUser(name, surname, accountName, password,repeatPassword){
  if(name.length<2 || surname.length<2 || password.length<3 || accountName.length<3){
    alert("Введенны не верно данные. Должно быть не менее 3 символов!");
    return;
  }

  if(password!=repeatPassword){
    alert("Введенный пароль не совпадает! Повторите снова.");
    return;
  }

  let user = {
    name: name,
    surname: surname,
    // day: day,
    // month: month,
    // year: year,
    // gender: gender,
    accountName: accountName,
    password: password,
    repeatPassword: repeatPassword
  }

  this.users.push(user);

}

// for (year = 1920; year <= 2020; year++) {
//  let options = document.createElement("option");
//  document.getElementById("dayBirth").appendChild(options).innerHTML = year;
//  };


isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

}
