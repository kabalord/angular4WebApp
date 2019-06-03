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

	constructor(){
		this.titulo = 'Crear un nuevo producto';
		this.producto = new Producto(0, '', '', 0, '');
	}

	ngOnInit(){
		console.log('product-add.component.ts cargado...');
	}
	onSubmit(){
		console.log(this.producto);
	}
}