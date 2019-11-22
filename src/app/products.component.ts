import { Component } from '@angular/core';
import { ProductService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent{
    productName = 'A book';
    products = ['A book', 'A tree']
    isDisabled = true

    constructor(private productsService: ProductService){
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000)
    }

    //run when angular creates the component
    ngOnInit() {
        // would not typically be used in the same file as addProduct, typically used to share things cross file
        // but just getting used to using it.
        this.products = this.productsService.getProducts();
    }

    onAddProduct(form) { 
        if (form.valid) {
            this.productsService.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName: string) {
         this.products = this.products.filter(p => p !== productName);
    }
}