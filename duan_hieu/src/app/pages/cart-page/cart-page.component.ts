import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(private router: Router) {  this.user = JSON.parse(String(localStorage.getItem('user')));
  if(!this.user) {
    this.router.navigateByUrl('/login')
  }
  this.carts = JSON.parse(String(localStorage.getItem('cart'))) || [];

  this.cartUser = this.carts.filter(cart => cart.userId === this.user.user._id) 
  this.cartItems = this.cartUser[0].items;}
  carts!: any[];
  cartUser!: any[];
  user: any;
  cartItems: any[] = [];

  
  deleteCartItem(id: string) {
    this.carts.forEach((cart, i) => {
      if(this.user.user._id === cart.userId) { 
        this.cartItems= cart.items.filter((item: any) => item._id !== id)
        this.carts[i].items = this.cartItems;
          return;
      }
      
    })
    localStorage.setItem('cart', JSON.stringify(this.carts))  
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login')
  }

}
