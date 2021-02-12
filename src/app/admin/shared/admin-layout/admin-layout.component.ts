import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';
import {ProductService} from '../../../shared/product.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router,
              private productServ: ProductService) {
  }

  ngOnInit(): void {
  }

  logout($event: MouseEvent) {
    $event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  setType() {
    this.productServ.setType('Phone');
  }
}