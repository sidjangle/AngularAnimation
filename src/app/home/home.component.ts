import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[fade]
 
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
