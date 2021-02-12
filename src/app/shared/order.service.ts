import {Injectable} from '@angular/core';
import {FbResponse, Order, Product} from './interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  create(order: Order): Observable<Order> {
    return this.http.post(`${environment.fbDgUrl}/orders.json`, order)
      .pipe(map((res: FbResponse) => {
        return {
          ...order,
          id: res.name,
          date: new Date(order.date)
        };
      }));
  }

  getAll(): Observable<Array<Order>> {
    return this.http.get(`${environment.fbDgUrl}/orders.json`)
      .pipe(map(res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }));
      }));
  }

  remove(id: string) {
    return this.http.delete(`${environment.fbDgUrl}/orders/${id}.json`);
  }
}
