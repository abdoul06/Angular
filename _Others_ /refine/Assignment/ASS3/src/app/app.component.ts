import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleStatus = false;
  log = [];

  onToggleDetails() {
    this.toggleStatus = !this.toggleStatus;
    this.log.push(this.log.length + 1);
  }
}
