import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-celector',
  templateUrl: './celector.component.html',
  styleUrls: ['./celector.component.scss']
})
export class CelectorComponent {

  constructor(public dateService: DateService) {
  }

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
