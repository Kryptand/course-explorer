import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'course-management-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  public dataSource$: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dataSource$ = this.http.get('api/course');
  }

  contextMenu($event: any) {
    console.debug($event);
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        template: 'totalGroupCount'
      }
    );
  }
}
