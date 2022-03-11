import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProductsAction, SelectProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-productst-item',
  templateUrl: './productst-item.component.html',
  styleUrls: ['./productst-item.component.css']
})
export class ProductstItemComponent implements OnInit {

  @Input() product:Product|null=null;
  constructor(private store:Store, private router:Router) { }

  ngOnInit(): void {
  }

onSelect(product:Product){
     this.store.dispatch(new SelectProductsAction(product));
}
onDelet(product:Product){
  this.store.dispatch(new DeleteProductsAction(product));
}
onEdit(product:Product) {
         this.router.navigateByUrl("/editProduct/"+product.id);
}

}
