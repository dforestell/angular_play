import { Subject } from 'rxjs';

export class ProductService{
    private products = ["A book"];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next();
    }

    getProducts(){
        return [...this.products];x
    }

    deleteProduct(product) {
        this.products = this.products.filter(p => p !== product);
        this.productsUpdated.next();
    }
} 