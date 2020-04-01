import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector: 'product-add',
	templateUrl: '../views/product-add.html',
	providers: [ProductoService]
})

export class ProductAddComponent {
	public titulo: string;
	public producto: Producto;

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router

	){
		this.titulo = 'Créer un nouveau produit';
		this.producto = new Producto(0, '', '', 0, '');
	}

	ngOnInit(){
		console.log('product-add.component.ts cargado...');
	}
	onSubmit(){
		console.log(this.producto);

		this._productoService.addProducto(this.producto).subscribe(

			response => {
			if(response.code == 200){
				this._router.navigate(['/products']);

				}else{
					alert(response);
				}
			},
			error => {
				alert(<any>error);
			}

		);
	}

}