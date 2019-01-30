import { Component } from '@angular/core';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'endtoend-app';
  users = new Array<User>();
  usersStatus = 'No Users';

  getUsers(){
    this.users.push(
      new User({id: '1', name: 'Eric', job: 'software developer'}), 
      new User({id: '2', name: 'Alan',  job: 'software engineer'}), 
      new User({id: '3', name: 'Michelle', job: 'Marketing'})
    )
    this.usersStatus = 'We have users'
  }

  deleteUsers(){
    this.users = new Array<User>();
    this.usersStatus = 'No Users'
  }

}
