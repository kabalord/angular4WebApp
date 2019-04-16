import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
	public url: string;

	constructor(

		public _http: Http

		){
		this.url = GLOBAL.url;
	}

	getProductos(){
		return "TEXTO DESDE EL SERVICIO";
	}
}