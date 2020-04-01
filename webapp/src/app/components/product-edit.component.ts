import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector: 'product-edit',
	templateUrl: '../views/product-add.html',
	providers:[ProductoService]
})

export class ProductEditComponent {
	public titulo: string;
	public producto: Producto;
	public filesToUpload;
	public resultUpload;


constructor(

	private _productoService: ProductoService,
	private _route: ActivatedRoute,
	private _router: Router

	){
		this.titulo = 'Editer Produit';
		this.producto = new Producto(1, '', '', 1, '');
	}

	ngOnInit(){
		console.log(this.titulo);
	}

}