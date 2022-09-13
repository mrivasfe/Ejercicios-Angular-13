import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css'],
})
export class TopbannerComponent implements OnInit {
  constructor() {}
  title: string = 'Weather APP';
  ngOnInit() {}
}
