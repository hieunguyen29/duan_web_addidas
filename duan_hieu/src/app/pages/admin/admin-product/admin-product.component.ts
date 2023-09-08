import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {
  }
  
  products!: IProduct[] 
 ngOnInit(): void {
   this.productService.getAllProduct().subscribe(data => {
    
    this.products = data
    
   })
 }

 deleteProduct(id: string | number) {
  const confirmation = confirm('Are you sure you want to delete this product?');
  if (confirmation) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product._id !== id);
    });
  }
}
}
