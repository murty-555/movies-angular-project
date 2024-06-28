import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fetchedUsers: any;
  user = {
    name: 'Eric',
    email: 'eric@gmail.com',
  };

  constructor(private _user: UserService) {}
  ngOnInit(): void {
    this._user.getUsers().subscribe((res) => {
      console.log(res);
      this.fetchedUsers = res;
    });
  }

  sendData() {
    this._user.updateUsers(this.user).subscribe((data) => console.log(data));
  }
}
