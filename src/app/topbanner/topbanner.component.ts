import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css'],
})
export class TopbannerComponent implements OnInit {
  constructor() {}
  
  @Input() title:string;

  ngOnInit() {}
}
