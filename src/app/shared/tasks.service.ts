import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  create(task: Task): Observable<Task> {
    return this.http
      .post<any>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(
        map(res => {
          console.log('response in create', res);
          return res;
        })
      );
  }
}
