import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'


@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  message = environment.message;

  constructor() { }

  ngOnInit(): void {
  }

}
