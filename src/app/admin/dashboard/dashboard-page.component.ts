import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {Product} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  products: Array<Product> = [];
  pSub: Subscription;
  rSub: Subscription;
  productName: string;

  constructor(private productServ: ProductService) {
  }

  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.rSub = this.productServ.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}
