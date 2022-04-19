import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output()
  public alreadyConnected: boolean = false;

  constructor() { }

  ngOnInit() {
  }



}
