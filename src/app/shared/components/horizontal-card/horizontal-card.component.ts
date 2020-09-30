import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
