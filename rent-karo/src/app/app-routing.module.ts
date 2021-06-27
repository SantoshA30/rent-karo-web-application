// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project
import { CartComponent } from './cart/cart.component';
import { PackageComponent } from "./package/package.component";
import { ShippingComponent } from './shipping/shipping.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { FurnitureListComponent } from './furniture/furniture-list/furniture-list.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'appliance', component: ApplianceComponent },
  { path: 'package', component: PackageComponent },
  { path: 'electronic', component: ElectronicComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'furniture-list/:furnitureId', component: FurnitureListComponent },
  { path: 'navigation', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
