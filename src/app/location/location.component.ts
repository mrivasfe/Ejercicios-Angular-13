import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }
  url:string = 'https://i.pinimg.com/736x/3d/3d/20/3d3d2006fb63b4d3612ce408752ac3bf.jpg';
  ngOnInit() {
  }

}