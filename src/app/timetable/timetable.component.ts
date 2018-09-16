import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../class-data.service';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  classes;
  constructor(private classDataService: ClassDataService) { }

  ngOnInit() {
    this.classes = this.classDataService.getClasses();
  }
  
  // getClasses() {
  //   this.classes = this.classDataService.getClasses();
  // }

}
