import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  apis = [
    { name: "API Tennis Documentación", link: "https://www.postman.com/crimson-station-718549/workspace/tfg/documentation/26629937-bf224f9d-cdf1-486f-ae09-1ff7eaa290da?entity=&branch=&version=" },
    { name: "API Premier-League Documentación", link: "https://www.postman.com/crimson-station-718549/workspace/tfg/documentation/26629937-0e9f6df9-5922-40b3-a79e-b8d840f990df?entity=&branch=&version=" }
  ];

  apiEndpoints = [
    { name: "API Premier League", link: "http://antoniosaborido.es/api/v2/premier-league" },
    { name: "API Tennis", link: "http://antoniosaborido.es/api/v2/tennis" }
  ];

  frontEndLinks = [
    { name: "Tennis Frontend", link: "http://antoniosaborido.es:8081/#/Tennis" },
    { name: "Premier-League Frontend", link: "http://antoniosaborido.es:8081/#/Premier-League" }
  ];
}
