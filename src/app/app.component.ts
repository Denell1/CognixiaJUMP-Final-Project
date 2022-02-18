import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MaterialModule } from './material/material.module';
import { MovielistService } from './movielist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedIn = false;

  constructor(public authService: AuthService) { }

}
