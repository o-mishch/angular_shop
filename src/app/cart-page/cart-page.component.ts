import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Order, Product} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../shared/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartProducts: Product[] = [];

  form: FormGroup;
  submitted = false;

  added = '';

  constructor(private productServ: ProductService,
              private orderServ: OrderService) {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    });
  }

  ngOnInit(): void {
    this.cartProducts = this.productServ.cartProducts;
  }

  get totalPrice(): number {
    return this.cartProducts
      .map(e => e.price)
      .reduce((a, b) => a + +b, 0);
  }


  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const order: Order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date()
    };

    this.orderServ.create(order).subscribe(res => {
      this.form.reset();
      this.added = 'Delivery is framed';
      this.submitted = false;
    });
  }

  delete(product: Product) {
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }
}
