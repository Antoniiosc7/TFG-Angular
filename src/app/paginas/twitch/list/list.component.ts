import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../../../../url';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  BASEUrl = url.baseUrl;
  entries: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEntries();
  }

  async getEntries() {
    console.log('Fetching entries....');
    try {
      const data = await this.http.get<any[]>(`${this.BASEUrl}/api/v1/tennis-twitch`).toPromise();
      this.entries = data || [];
      console.log('Received entries: ' + this.entries.length);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  }
}
