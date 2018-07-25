import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  parameters : string[];
  constructor() {
    this.parameters=['Uber','Taj','Club 8', 'Sport'];
   }

  ngOnInit() {
  }

}
