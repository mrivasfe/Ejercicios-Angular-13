import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() titleHijo:string;
  footer: string = 'Todos los derechos reservados';
  @Input() temp:number;

  ngOnInit() {
  }

}