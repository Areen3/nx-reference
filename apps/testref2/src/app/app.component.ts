import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageApi } from '@testref2/api-interfaces';
// to moj kom2
@Component({
  selector: 'testref2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<MessageApi>('/api/hello');
  constructor(private http: HttpClient) {}
}
