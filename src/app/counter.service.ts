import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactive = 0;
  inactiveToActive = 0;

  activeClicked = new EventEmitter<void>();
  inactiveClicked = new EventEmitter<void>();
  constructor() {
    this.activeClicked.subscribe(() => {
      this.inactiveToActive = this.inactiveToActive + 1;
      console.log('Inactive -> Active : ' + this.inactiveToActive);

      alert('Inactive -> Active : ' + this.inactiveToActive);
    });

    this.inactiveClicked.subscribe(() => {
      this.activeToInactive = this.activeToInactive + 1;
      console.log('Active -> Inactive : ' + this.activeToInactive);

      alert('Active -> Inactive : ' + this.activeToInactive);
    });
  }
}
