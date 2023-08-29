import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../../../../url';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListFemComponent implements OnInit {
  entries: any[] = [];
  BASEUrl = url.baseUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEntries();
  }

  async getEntries() {
    console.log("Fetching entries....");
    const BASE_API_PATH = `${this.BASEUrl}/api/v1/tennisWomen`;

    try {
      const data = await this.http.get<any[]>(BASE_API_PATH).toPromise();
      this.entries = data || [];
      console.log("Received entries: " + this.entries.length);
    } catch (error) {
      console.error("Error fetching entries: ", error);
    }
  }
}
