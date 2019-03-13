import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'products-list',
	templateUrl: '../views/products-list.html'
})  
export class ProductsListComponent{
	public titulo: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Listado de productos';
	}

	ngOnInit(){
		console.log('products-list.component.ts cargado!')
	}
}