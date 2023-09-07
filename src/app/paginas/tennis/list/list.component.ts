import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { url } from '../../../../url';

@Component({
  selector: 'tennis-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TennisListComponent implements OnInit {

  BASEUrl = url.baseUrl;
  BASE_API_PATH = `${this.BASEUrl}/api/v2/tennis`;
  entries: any[] = [];
  newEntry = {
    country: '',
    year: '',
    most_grand_slam: '',
    masters_finals: '',
    olympic_gold_medals: ''
  };
  checkMSG = '';
  visible = false;
  color = 'danger';
  page = 1;
  totaldata = 6;
  from: number | null = null; // Declare 'from' property
  to: number | null = null;   // Declare 'to' property
  offset = 0;
  limit = 10;
  maxPages = 0;
  maxPagesArray: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEntries();
  }

  async getEntries() {
    this.maxPagesArray = Array.from({ length: this.maxPages + 1 }, (_, i) => i);

    console.log('Fetching entries....');
    let cadena = `${this.BASE_API_PATH}?limit=${this.limit}&&offset=${this.offset * 10}&&`;
    if (this.from !== null) {
      cadena += `from=${this.from}&&`;
    }
    if (this.to !== null) {
      cadena += `to=${this.to}&&`;
    }

    try {
      const data: any = await this.http.get(cadena)
        .pipe(
          catchError(error => this.handleError(error)) // Use the catchError operator
        )
        .toPromise();

      if (data !== null && data !== undefined) {
        this.entries = data;
        console.log('Received entries: ' + this.entries.length);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async insertEntry() {
    console.log('Inserting resources...');

    if (
      this.newEntry.country === '' ||
      this.newEntry.year === '' ||
      this.newEntry.most_grand_slam === '' ||
      this.newEntry.masters_finals === '' ||
      this.newEntry.olympic_gold_medals === ''
    ) {
      alert('Los campos no pueden estar vacíos');
      return;
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: this.newEntry.country,
        year: parseInt(this.newEntry.year, 10),
        most_grand_slam: parseFloat(this.newEntry.most_grand_slam),
        masters_finals: parseFloat(this.newEntry.masters_finals),
        olympic_gold_medals: parseFloat(this.newEntry.olympic_gold_medals)
      })
    };

    try {
      const response = await fetch(this.BASE_API_PATH, requestOptions);
      
      if (response.status === 201) {
        // Procesar la respuesta exitosa
      } else {
        console.log('Error response:', response);
      }
    } catch (error) {
      console.error('Error inserting entry:', error);
    }
  }    


  
  loadInitialData() {
    console.log('Fetching entry data...');
    const requestOptions: Object = {
      method: 'GET',
    };

    fetch(`${this.BASE_API_PATH}/loadInitialData`, requestOptions)
    .then((res) => {
      if (res.ok) {
        this.getEntries(); 
        this.totaldata++;
        console.log('Data loaded successfully');
        this.color = 'success';
        this.checkMSG = 'Datos cargados correctamente';
      } else {
        throw new Error('Failed to load initial data');
      }
    })
    .catch((error) => {
      console.error('Error loading initial data:', error);
      this.color = 'danger';
      this.checkMSG = 'No se pudo cargar los datos iniciales';
    });

  }
  

  deleteEntry(countryD: string, yearD: string) {
    console.log('Deleting entry...');
    const requestOptions: Object = {
      method: 'DELETE'
    };

    fetch(`${this.BASE_API_PATH}/${countryD}/${yearD}`, requestOptions)
      .then((res) => {
        if (res.ok) {
          this.getEntries();
          this.totaldata--;
          console.log(`Deleted entry ${countryD} ${yearD}`);
          this.color = 'success';
          this.checkMSG = `Recurso ${countryD} ${yearD} borrado correctamente`;
        } else if (res.status === 404) {
          this.color = 'danger';
          this.checkMSG = `No se ha encontrado el objeto ${countryD}`;
          console.log('Resource NOT FOUND');
        } else {
          this.color = 'danger';
          this.checkMSG = 'No se pudo borrar el recurso';
          console.log('ERROR!');
        }
      })
      .catch((error) => {
        console.error('Error deleting entry:', error);
        this.color = 'danger';
        this.checkMSG = 'Error al borrar el recurso';
      });
  }

  deleteAllEntries() {
    console.log('Deleting all entries...');
    if (confirm('¿Está seguro de que desea eliminar todas las entradas?')) {
      const requestOptions: Object = {
        method: 'DELETE'
      };

      fetch(this.BASE_API_PATH, requestOptions)
        .then((res) => {
          if (res.ok && this.totaldata > 0) {
            this.totaldata = 0;
            this.getEntries();
            this.color = 'success';
            this.checkMSG = 'Datos eliminados correctamente';
            console.log('OK All data erased');
          } else if (this.totaldata === 0) {
            console.log('ERROR Data was not erased');
            this.color = 'danger';
            this.checkMSG = '¡No hay datos para borrar!';
          } else {
            console.log('ERROR Data was not erased');
            this.color = 'danger';
            this.checkMSG = 'No se han podido eliminar los datos';
          }
        })
        .catch((error) => {
          console.error('Error deleting all entries:', error);
          this.color = 'danger';
          this.checkMSG = 'Error al borrar todos los recursos';
        });
    }
  }

  navigateToChart1() {
    window.location.href = '/#/tennis/chart';
  }

  navigateToChart2() {
    window.location.href = '/#/tennis/chart2';
  }

  updatePage(page: number) {
    this.offset = page;
    this.getEntries();
  }

  changePage() {
    this.getEntries();
  }

  searchEntries() {
    console.log('Searching entries...');
    if (this.from === null || this.to === null) {
      window.alert('Los campos fecha inicio y fecha fin no pueden estar vacíos');
    } else {
      this.checkMSG = 'Datos cargados correctamente en ese periodo';
      this.getEntries();
    }
  }
  
  clearSearch() {
    this.from = null;
    this.to = null;
    this.getEntries();
    this.checkMSG = 'Búsqueda limpiada';
  }
  

  handleError(error: any) {
    console.error(error);
    return throwError('An error occurred');
  }
}
