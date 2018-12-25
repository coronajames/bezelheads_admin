import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$;

  products_temp = [
    {
      thumbnail: './assets/images/products/speaker-1.jpg',
      title: '2018 Rolex Celini',
      location: 'USA',
      certificate: 'Yes',
      condition: 'New',
      box: 'Yes',
      price: '3400',
      user: 'Dan Masters'
    },
    {
      thumbnail: './assets/images/products/speaker-1.jpg',
      title: '2016 Hublot Big Bang',
      location: 'USA',
      certificate: 'Yes',
      condition: 'New',
      box: 'Yes',
      price: '3400',
      user: 'Dan Masters'
    },
    {
      thumbnail: './assets/images/products/speaker-1.jpg',
      title: '2018 Rolex Celini',
      location: 'USA',
      certificate: 'Yes',
      condition: 'New',
      box: 'Yes',
      price: '3400',
      user: 'Dan Masters'
    },
    {
      thumbnail: './assets/images/products/speaker-1.jpg',
      title: '2014 Breitling Superocean Heritage',
      location: 'USA',
      certificate: 'Yes',
      condition: 'New',
      box: 'Yes',
      price: '3400',
      user: 'Dan Masters'
    }
  ];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // this.products$ = this.productService.getProducts();
  }

}
