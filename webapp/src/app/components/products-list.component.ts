import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';

@Component({
	selector: 'products-list',
	templateUrl: '../views/products-list.html',
	providers: [ProductoService]
})  
export class ProductsListComponent{
	public titulo: string;
	public productos: Producto[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
	){
		this.titulo = 'Liste de produits';
	}

	ngOnInit(){
		console.log('products-list.component.ts cargado!');
		
		this._productoService.getProductos().subscribe(

			result => {
				if (result.code != 200) {
					console.log(result);
				}else{
					this.productos = result.data;
				}
			},
			error => {
				console.log(<any>error);
			}

			);
	}
}