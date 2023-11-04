import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BadgeComponent implements OnInit {

  @Input() pokeType: any;

  ngOnInit() {
  }

}
