import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop/shop.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: '', component: LandingComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
