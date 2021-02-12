import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs';
import {Product} from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  products$: Observable<Array<Product>>;

  constructor(public productServ: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productServ.getAll();
  }

}
