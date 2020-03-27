import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-celector',
  templateUrl: './celector.component.html',
  styleUrls: ['./celector.component.scss']
})
export class CelectorComponent implements OnInit {

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
  }

}
