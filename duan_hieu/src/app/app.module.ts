import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { QuenpasswordComponent } from './pages/quenpassword/quenpassword.component';
import { RegisterComponent } from './pages/register/register.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    QuenpasswordComponent,
  
    HeaderAdminComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    SidebarAdminComponent,
    DashboardComponent,
    NotFoundComponent,
    AdminProductComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    BlogComponent,
    CartPageComponent,
 

  

  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,  BrowserAnimationsModule,MatIconModule,HttpClientModule, CommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
