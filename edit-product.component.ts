import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProductsAction, SaveProductsAction, UpdateProductsAction } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
   productID:number;
  state:ProductsState|null=null;
  productFormGroup:FormGroup|null=null;
  readonly ProductsStateEnum=ProductsStateEnum;
   formBuilt:boolean=false;
   submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private store:Store<any>,private fb:FormBuilder,private router:Router) {
        this.productID= activatedRoute.snapshot.params['id'] ;  
       
   }

  ngOnInit(): void {
    
        this.store.dispatch(new EditProductsAction(this.productID));
        this.store.subscribe(state=>{
          this.state=state.catalogState;
          if(this.state?.dataState==ProductsStateEnum.LOADED){
            if(this.state.currentproduct!=null){
              this.productFormGroup=this.fb.group({
                id:[this.state.currentproduct.id],
                name:[this.state.currentproduct.name,Validators.required],
                price:[this.state.currentproduct.price,Validators.required],
                quantity:[this.state.currentproduct.quantity,Validators.required],
                selected:[this.state.currentproduct.selected],
                available:[this.state.currentproduct.available]
               });
               this.formBuilt=true;
          }
        }
     });
    }
    okUpdated(){
          this.router.navigateByUrl("/products");
    }
    onUpdateProduct(){
      this.submitted=true;
        if(this.productFormGroup?.invalid) return
       this.store.dispatch(new UpdateProductsAction(this.productFormGroup?.value));
    }
   }
