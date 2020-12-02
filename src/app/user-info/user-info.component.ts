import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userID ="";
  // нужно получить айдишник из адресной строки
  constructor(private router: ActivatedRoute) {
    this.userID = this.router.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
