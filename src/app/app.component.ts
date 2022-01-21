import { Component } from '@angular/core';
import { fade } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fade]
})
export class AppComponent {
  title = 'AngularAnimation';
}
