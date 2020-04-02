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

  static url = 'https://angular-calendar-7fdb5.firebaseio.com/tasks';

  constructor(private http: HttpClient) { }

  create(task: Task) {
    this.http.post<any>(`${TasksService.url}/${task.date}.json`, task);
  }
}
