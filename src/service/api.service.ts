import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class APIService {   
    constructor(private hhtp:HttpClient){}

    // после знака : указываем какой тип данных будет возвращаться 
        getCatFacts(): Promise<any>{
            return this.hhtp
            .get('https://cat-fact.herokuapp.com/facts')
            .toPromise();
        }
}