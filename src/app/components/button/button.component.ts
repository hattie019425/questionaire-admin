import { Component, OnInit, Input } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';

@Component({
  selector: 'mat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() color: string = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
