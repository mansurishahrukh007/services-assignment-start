import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  activeToInactive;
  inactiveToActive;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.activeToInactive = this.counterService.activeToInactive;
    this.inactiveToActive = this.counterService.inactiveToActive;

    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
