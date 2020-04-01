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
	public confirmado;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
	){
		this.titulo = 'Liste de produits';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('products-list.component.ts cargado!');
		this.getProductos();
	}

	getProductos(){
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

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteProducto(id){
		this._productoService.deleteProducto(id).subscribe(
			response => {
				if (response.code == 200) {
					this.getProductos();
				}else{
					alert("Erreur au moment d'effacer product" );
				}
			},
			error => {
				console.log(<any>error);
			}

			);
	}
}