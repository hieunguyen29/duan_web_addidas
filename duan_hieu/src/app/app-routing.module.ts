import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'cart', component: CartPageComponent },
      {path:'product/:id',component:ProductDetailComponent},

      {
        path: 'login',
        component: LoginComponent,
      },
      { path: 'register', component: RegisterComponent },
    ],

  },


  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'products',
        component: AdminProductComponent,
      },
      {
        path: 'products/add',
        component: CreateComponent,
      },
      {
        path: 'products/edit/:id',
        component: EditComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
