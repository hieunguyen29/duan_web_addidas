// import { Component, OnInit } from '@angular/core';
// import { IProduct } from 'src/app/common/product';
// import { ProductService } from 'src/app/services/product/product.service';
// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss']
// })
// export class ProductsComponent implements OnInit {

//   constructor(private productService: ProductService) {}

//   filteredProducts: IProduct[] = [];
//   searchKeyword: string = '';

//   searchProducts() {
//     if (this.searchKeyword.trim() !== '') {
//       this.filteredProducts = this.products.filter((product) =>
//         product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
//       );
//     } else {
//       this.filteredProducts = this.products;
//     }
//   }

//   products: IProduct[] = []
//   ngOnInit(): void {
//     this.productService.getAllProduct().subscribe((data) => {
//      this.products = data
     
//     })
//   }




// }
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
 
    filteredProducts: IProduct[] = [];
  minPrice: number;
  maxPrice: number;
  currentPage: number = 1; // Trang hiện tại
  itemsPerPage: number = 4; // Số sản phẩm trên mỗi trang
  constructor(private productService: ProductService) {
    this.filteredProducts = this.products;
    this.minPrice = 0; // Khởi tạo giá trị mặc định cho minPrice
    this.maxPrice = 0;
  }
  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      const nameMatch =
        product.name &&
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase());
      const priceMatch =
        product.price !== undefined &&
        product.price >= this.minPrice &&
        product.price <= this.maxPrice;
      return nameMatch && priceMatch;
    });
  }

  searchKeyword: string = '';
  filterProductsByPrice() {
    this.filterProducts();
  }
  searchProducts() {
    if (this.searchKeyword.trim() !== '') {
      this.filterProducts();
    } else {
      this.filteredProducts = this.products;
    }
  }
  get pagedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.products.length / this.itemsPerPage);
    return Array(pageCount)
      .fill(0)
      .map((_, index) => index + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
  products!: IProduct[];
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }
}
