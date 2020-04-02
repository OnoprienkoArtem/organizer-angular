import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Task {
  id?: string;
  title: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  static url = '';

  constructor(private http: HttpClient) { }

  create(tasks: Task) {

  }
}
