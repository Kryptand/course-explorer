import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '@course-management/api-interfaces';

@Component({
  selector: 'course-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello$ = this.http.get<Course[]>('/api/course');
  constructor(private http: HttpClient) {}
}
