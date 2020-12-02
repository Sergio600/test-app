import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss']
})
export class CatFactComponent implements OnInit {
  @Input('fact') fact;
  
  constructor() { }

  ngOnInit(): void {
  }

}
