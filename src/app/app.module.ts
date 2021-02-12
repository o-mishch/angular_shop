import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {AuthInterceptor} from './shared/auth.interceptor';
import {ProductComponent} from './product/product.component';
import { SortingPipe } from './shared/sorting.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
