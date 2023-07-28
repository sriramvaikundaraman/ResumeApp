import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeApp';
  isNavbarOpen = false;
  toggleClick(){
    this.isNavbarOpen = !this.isNavbarOpen;
    console.log(this.isNavbarOpen);
  }
}
