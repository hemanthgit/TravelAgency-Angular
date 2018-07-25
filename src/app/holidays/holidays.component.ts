import { Component, OnInit } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';
import { Weekendtrip } from '../weekendtrip';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  providers:[ShowtripsService]
})
export class HolidaysComponent implements OnInit {

  weekEndTripList: Weekendtrip[];
  constructor(private service: ShowtripsService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.weekEndTripList = resp);
  }

}
