import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  facts = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getCatFacts().then(
      (data: any) => {
        this.facts = data.all;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
