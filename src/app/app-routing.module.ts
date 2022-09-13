import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './Home/home.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: ProductListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'form', component: FormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
