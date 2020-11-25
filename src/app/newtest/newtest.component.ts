import {Component, ɵɵsanitizeUrlOrResourceUrl} from '@angular/core';
import {Sort} from '@angular/material/sort';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

export interface User {
  position: number;
  name: string;
  years: number;
  accaunt: string;
  email: string;
}

@Component({
selector: 'app-newtest',
templateUrl: './newtest.component.html',
styleUrls: ['./newtest.component.scss']


})

export class NewtestComponent{

    users: User[] = [
        {position: 1, name: 'Sergio', years: 33, accaunt: 'sergio600', email: 'sergio600@mail.ru'},
        {position: 2, name: 'Veroni', years: 25, accaunt: 'veroni', email: 'veroni@mail.ru'},
        {position: 3, name: 'Alinka', years: 31, accaunt: 'alinkin', email: 'alinkin@mail.ru'},
        {position: 4, name: 'Mama', years: 56, accaunt:'lanarovna', email:'lanarovna@mail.ru'},
        {position: 5, name: 'Papa', years: 60, accaunt: 'adamich', email: 'adamich1960@mail.ru'},
      ];
    
      sortedData: User[];
    
      constructor() {
        this.sortedData = this.users.slice();
      }
    
      sortData(sort: Sort) {
        const data = this.users.slice();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
    
        this.sortedData = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
              case 'position': return compare(a.position, b.position, isAsc);
            case 'name': return compare(a.name, b.name, isAsc);
            case 'years': return compare(a.years, b.years, isAsc);
            case 'accaunt': return compare(a.accaunt, b.accaunt, isAsc);
            case 'email': return compare(a.email, b.email, isAsc);
            default: return 0;
          }
        });
      }


        addUser(name, years, accaunt, email){
            
            let user={
                position: this.users.length+1,
                name: name,
                years: years,
                accaunt: accaunt,
                email: email
            }
        this.users.push(user);

        }
    
    }
    
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);



    

}



