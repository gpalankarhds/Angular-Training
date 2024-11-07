import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel.model';
import { Products, ProductsEntity } from 'src/app/models/products.model';
import { RestServiceService } from 'src/app/services/rest-service/rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselData: any;
  showWidget1: boolean = false;
  title: string = '';
  products: ProductsEntity[] | null | undefined;
  showWidget2: boolean = false;
  products2: ProductsEntity[] | null | undefined;

  constructor(private restService: RestServiceService) {}

  ngOnInit(): void {
    this.getCarouselData();
    this.getProducts();
  }

  getCarouselData() {
    this.restService.getCarouselData().subscribe((resp: Carousel[]) => {
      this.carouselData = resp;
      this.showWidget1 = true;
    });
  }

  getProducts() {
    this.restService.getProducts().subscribe((resp: Products) => {
      this.title = resp.title;
      this.products = resp.products?.reverse();
      this.products2 = resp.products;
      this.showWidget2 = true;
    });
  }
}
