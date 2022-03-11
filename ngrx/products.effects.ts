import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductService } from "../services/product.service";
import { DeleteProductsActionError, DeleteProductsActionSuccess, EditProductsActionError, EditProductsActionSuccess, GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductsActionSuccess, ProductsActions, ProductsActionsTypes, SaveProductsActionError, SaveProductsActionSuccess, SearchProductsActionError, SearchProductsActionSuccess, SelectProductsActionError, SelectProductsActionSuccess, UpdateProductsActionError, UpdateProductsActionSuccess } from "./products.actions";

@Injectable()
export class ProductsEffects {
     constructor(private productService :ProductService ,private effectActions:Actions){

     }
     getAllProductsEffects:Observable<Action>=createEffect(
      ()=> this.effectActions.pipe(
          ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
          mergeMap((action)=>{
              return this.productService.getProducts()
              .pipe(
                  map((products)=> new GetAllProductsActionSuccess(products)),
                 catchError((err)=>of(new GetAllProductsActionError(err.message))) 
              )
          })
      )   
     );
        /* get selected products */
     getSelectedProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.getSelectedProducts()
                .pipe(
                    map((products)=> new GetSelectedProductsActionSuccess(products)),
                   catchError((err)=>of(new GetSelectedProductsActionError(err.message))) 
                )
            })
        )   
       );

         /* search products */
     searchProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.searchProducts(action.payload)
                .pipe(
                    map((products)=> new SearchProductsActionSuccess(products)),
                   catchError((err)=>of(new SearchProductsActionError(err.message))) 
                )
            })
        )   
       );

          /* select products */
     selectProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SELECT_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.setSelected(action.payload)
                .pipe(
                    map((product)=> new SelectProductsActionSuccess(product)),
                   catchError((err)=>of(new SelectProductsActionError(err.message))) 
                )
            })
        )   
       );
       
          /* delete products */
     deleteProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.DELETE_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.delete(action.payload.id)
                .pipe(
                    map(()=> new DeleteProductsActionSuccess(action.payload)),
                   catchError((err)=>of(new DeleteProductsActionError(err.message))) 
                )
            })
        )   
       );
           
          /* new products */
     NewProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.NEW_PRODUCTS),
            map((action:ProductsActions)=>{
                return new NewProductsActionSuccess({});
            })
        )   
       );
           
          /* new products */
     SaveProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SAVE_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.save(action.payload)
                .pipe(
                        map((product)=>new SaveProductsActionSuccess(product)),
                        catchError((err)=>of(new SaveProductsActionError(err.message)))
                )
            })
        )   
       );
         /* edite products */
     EditeProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.EDIT_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.getProductById(action.payload)
                .pipe(
                        map((product)=>new EditProductsActionSuccess(product)),
                        catchError((err)=>of(new EditProductsActionError(err.message)))
                )
            })
        )   
       );
          /* update products */
     UpdateProductsEffects:Observable<ProductsActions>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.UPDATE_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productService.update(action.payload)
                .pipe(
                        map((product)=>new UpdateProductsActionSuccess(product)),
                        catchError((err)=>of(new UpdateProductsActionError(err.message)))
                )
            })
        )   
       );
}