import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/producto.model'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  title = 'TFGng';
  productos: Product[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private http: HttpClient) {} // Inyectamos HttpClient en el constructor



  
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.productos = data;
        this.productosFiltrados = this.productos; // Mostrar todos los productos al cargar la página
      });
    this.paginator.pageSize = 10;
    this.paginator.showFirstLastButtons = true;
  }
  from: number | null = null;
  to: number | null = null;

  checkMSG: string = ''; // Para mensajes de control
  currentPage: number = 1; // Página actual
  productosFiltrados: Product[] = []; // Productos filtrados

  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex;
  }
  buscar() {
    if (this.from === null || this.to === null) {
      window.alert('Los campos precio mínimo y máximo no pueden estar vacíos');
    } else {
      this.productosFiltrados = this.productos.filter(producto => producto.price >= this.from! && producto.price <= this.to!);
      this.checkMSG = "Datos cargados correctamente en ese rango de precios";
      this.currentPage = 1;
    }
  }

  limpiarBusqueda() {
    this.from = null;
    this.to = null;
    this.checkMSG = "Búsqueda limpiada";
    this.currentPage = 1;
    this.productosFiltrados = this.productos; // Mostrar todos los productos después de limpiar
  }
}

