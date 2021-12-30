import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lists$!: List[];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    return this.apiService.getData().subscribe(data => this.lists$ = data)
  }


}
