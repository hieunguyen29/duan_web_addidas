import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: ActivatedRoute, private route: Router, private categoryService: CategoryService) {
    this.router.paramMap.subscribe(params => {
      this.id = String(params.get('id'));
      console.log(this.id);
      this.productService.getOneProduct(this.id).subscribe(data =>{
        this.formProduct.patchValue({
          name: data.name,
          categoryId: data.categoryId._id,
          image: data.image,
          price: data.price,
          desc: data.desc
        })
      })
    })

    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
      
    })
  }
  categories!: any[]
  id !: string;
formProduct = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(6)]],
  image: ['', [Validators.required]],
  categoryId: ['', [Validators.required]],
  price: [0, [Validators.required, Validators.min(0)]],
  desc: ['', [ Validators.minLength(6)]],
})

onSubmit() {
  const product = this.formProduct.value;
  this.productService.updateProduct(product, this.id).subscribe( () => {
    alert("Cap nhat san pham thanh cong");
    this.route.navigateByUrl("/admin/products")
  }, error => {
    console.log(error);
    
  })
  
}


}
