import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  constructor(private router: Router) { }

  newChange(): void {
    
    this.router.navigateByUrl('login');
}

}
