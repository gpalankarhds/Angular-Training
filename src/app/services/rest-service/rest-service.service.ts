import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from 'src/app/models/carousel.model';
import { Products } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  constructor(private httpClient: HttpClient) {}

  getCarouselData(): Observable<Carousel[]> {
    return this.httpClient.get<Carousel[]>(
      'https://run.mocky.io/v3/61844ee7-c80c-4a3c-b790-46af527d6303'
    );
  }

  getProducts(): Observable<Products> {
    return this.httpClient.get<Products>(
      'https://run.mocky.io/v3/0d53e4d4-c28e-4efc-a349-088488117c63'
    );
  }
}
