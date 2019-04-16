import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'

@Component({
	selector: 'products-list',
	templateUrl: '../views/products-list.html',
	providers: [ProductoService]
})  
export class ProductsListComponent{
	public titulo: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
	){
		this.titulo = 'Listado de productos';
	}

	ngOnInit(){
		console.log('products-list.component.ts cargado!');
		alert(this._productoService.getProductos());
	}
}