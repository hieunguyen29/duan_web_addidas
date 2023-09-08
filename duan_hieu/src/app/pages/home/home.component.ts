
import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/common/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  description: string | undefined;
  // filteredProducts: IProduct[] = [];
  searchKeyword: string = '';
  user: any
  constructor(private router: Router, private productService: ProductService) {
  }
  searchProducts() {
    if (this.searchKeyword.trim() !== '') {
      this.products = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.products = this.products;
    }
  }

  // viewProductDetail(product: IProduct) {
  //   this.router.navigate(['/products', product.id]);
  // }
  onClick() {
    this.description = 'mota';
  }

  cart!: any;
    
  products!: IProduct[] 
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
     this.products = data
    })
    this.user = JSON.parse(String(localStorage.getItem('user')));

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login')
  }

  addToCart(product: any) {
    // Neu trong localStorage co cart thi lay ra va gan vao bien cart khong thi gan bang 1 mang rong
    this.cart = JSON.parse(String(localStorage.getItem('cart'))) || [];

    // Neu nguoi dung chua dang nhap thi chuyen huong sang trang login
    if(!this.user) {
      alert("Vui long dang nhap!");
      this.router.navigateByUrl('/login');
      return;
    }
    // Neu gio hang da co phan tu
    if(this.cart.length > 0) {
      let checkItem = false;      
      let checkUser = false;

      this.cart.forEach((cart: any, i: number) => {
        // Check xem nguoi dung dang dang nhap da co san pham nao trong gio hang hay chua
        if(this.user.user._id === cart.userId) {       
          checkUser = true; 
          // Check xem trong gio hang da co san pham do hay chua
          cart.items.forEach((item: any, j: number) => {
            if(item._id === product._id) {
              // Neu trong gio hang da ton tai san pham thi cap nhap so luon len 1
              checkItem = true;
              item.quantity  += 1;
              this.cart[i].items[j] = item;
            }      
          })
          // Khong thi push san pham vao id nguoi dung tuong ung
          if(!checkItem) {
            this.cart[i].items.push({...product, quantity: 1})
          }
          
        }
      });
      if(!checkUser) {
        this.cart.push({
          userId: this.user.user._id,
          items: [{...product, quantity: 1}]
        })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))  
    } else {
      // Gio hang khong co phan tu nao thi push san pham vao gio hang
      this.cart.push({
        userId: this.user.user._id,
        items: [{...product, quantity: 1}]
      })
    
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    
  }
}