import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/service/api.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

facts=[];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getCatFacts().then(
      (data: any)=>{
       this.facts = data.all;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
