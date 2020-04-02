import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  static url = '';

  constructor(private http: HttpClient) { }

  create() {

  }
}
